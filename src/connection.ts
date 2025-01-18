// connection.ts
import { Sequelize, Options } from "sequelize";
import { config } from "../config/config";

class Database {
  private static instance: Database;
  private sequelize: Sequelize;
  private sequelizeOptions: Options = {};
  private constructor() {
    // for local env
    this.sequelizeOptions = {
      database: config.database.dbName,
      username: config.database.dbUsername,
      password: config.database.dbPassword,
      host: config.database.dbHost,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: true,
    };

    if (config.app.env != "local") {
      this.sequelizeOptions = {
        database: config.database.dbName,
        username: config.database.dbUsername,
        password: config.database.dbPassword,
        host: config.database.dbHost,
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
        // Add other Sequelize options as needed
      };
    }
    this.sequelize = new Sequelize(this.sequelizeOptions);
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  getSequelize(): Sequelize {
    return this.sequelize;
  }
}

export { Database };
