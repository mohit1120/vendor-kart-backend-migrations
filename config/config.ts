import { loadAppConfig, AppConfig } from "./app";
import { loadDatabaseConfig, DatabaseConfig } from "./database";

// Load app and database configurations
const appConfig: AppConfig = loadAppConfig();
const databaseConfig: DatabaseConfig = loadDatabaseConfig();

// Create and export the Config interface
export interface Config {
  app: AppConfig;
  database: DatabaseConfig;
}

const config: Config = {
  app: appConfig,
  database: databaseConfig,
};

export { config };
