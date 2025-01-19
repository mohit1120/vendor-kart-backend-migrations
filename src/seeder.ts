import { Users } from "./entities/users";
import { seedusers } from "./seeds/users";
// Define the seed objects
const seeds = [
  {
    tableName: Users.tableName,
    run: async () => {
      await seedusers();
    },
  }
];

export { seeds };
