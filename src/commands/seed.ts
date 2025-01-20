import { Sequelize } from "sequelize";
import { Database } from "../connection";
import { Command } from "commander";
import { config } from "../../config/config";
import { seeds } from "../seeder";

export function seedCommand(): Command {
  const command = new Command("seed");

  command.description("Seed the database with sample data").action(async () => {
    try {
      if (config.app.env != "local") {
        console.log("Warning: Environment is not local. Tables wont be seeded");
        return;
      }

      // Initialize database connection
      const database = Database.getInstance();
      const sequelize = database.getSequelize();

      // Start transaction
      const transaction = await sequelize.transaction();

      try {
        // Execute migrations
        for (const seed of seeds) {
          await seed.run();
          console.log(`Seeding table: ${seed.tableName}`);
        }

        // Commit transaction
        await transaction.commit();
        console.log("Seeding completed successfully.");
      } catch (error) {
        // Rollback transaction on error
        await transaction.rollback();
        console.error("Seeding failed:", error);
      }
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
  return command; // <-- Add this return statement
}
