import { Users } from "./entities/users";

// Define the migration objects
const migrations = [
  {
    tableName: Users.tableName,
    run: async () => {
      await Users.sync();
    },
  },
];

export { migrations };
