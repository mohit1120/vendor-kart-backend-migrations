
import Koa from "koa"
import { config } from "../config/config";
import { Command } from "commander";
import { seedCommand } from "./commands/seed";
import { migrateCommand } from "./commands/migrate";
import { dropCommand } from "./commands/drop_tables";

async function Main() {
const Main = () => {
    try {
        // Create a new Commander program
        const program = new Command();
    
        // Register the seed command
        program.addCommand(seedCommand());
        program.addCommand(migrateCommand());
        program.addCommand(dropCommand());
    
        // Parse command-line arguments
        program.parse(process.argv);
    
        // router
        if (config.app.env != "local") {
          console.log("env", config.app.env);
          const app = new Koa();
          const port = config.app.port;
          app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
          });
        }
      } catch (error) {
        // catch error here
        throw error;
      }
};

Main();
