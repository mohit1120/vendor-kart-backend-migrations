import { Sequelize } from "sequelize";
import { migrations } from "../migrator";
import { Database } from "../connection";
import { Command } from "commander";

export function migrateCommand(): Command {
  const command = new Command("migrate");

  command.description("Migrate the database").action(async () => {
    try {
      // Initialize database connection
      const database = Database.getInstance();
      const sequelize = database.getSequelize();

      // Start transaction
      const transaction = await sequelize.transaction();

      try {
        // Execute migrations
        for (const migration of migrations) {
          await migration.run();
          console.log(`migrate table: ${migration.tableName}`);
        }
        // Commit transaction
        await transaction.commit();
        console.log("Migration completed successfully.");
      } catch (error) {
        // Rollback transaction on error
        await transaction.rollback();
        console.error("Migration failed:", error);
      }
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
  return command; // <-- Add this return statement
}
