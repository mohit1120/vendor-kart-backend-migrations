import { Command } from "commander";
import { Database } from "../connection";
import { config } from "../../config/config";

export function dropCommand(): Command {
  const command = new Command("droptables");

  command.description("Drop all tables in the database").action(async () => {
    // Load configuration
    if (config.app.env != "local") {
      console.log("Warning: Environment is not local. Tables wont be dropped");
      return;
    }

    // Initialize database connection
    const database = Database.getInstance();
    const sequelize = database.getSequelize();

    try {
      // Drop all tables
      await sequelize.drop();

      console.log("All tables dropped successfully.");
    } catch (error) {
      console.error("Error dropping tables:", error);
    } finally {
      // Close database connection after dropping tables
      await sequelize.close();
    }
  });

  return command;
}
