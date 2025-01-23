import { config } from "./config";

/* -------------------------------------------------------------------------- */
/*                                 APP CONFIG                                 */
/* -------------------------------------------------------------------------- */
test("loadAppConfig", () => {
  expect(config.app).toEqual({
    port: "8080",
    env: "local",
  });
});

/* -------------------------------------------------------------------------- */
/*                               DATABASE CONFIG                              */
/* -------------------------------------------------------------------------- */
test("loadDatabaseConfig", () => {
  expect(config.database).toEqual({
    dbHost: "localhost",
    dbName: "postgres",
    dbUsername: "postgres",
    dbPassword: "postgres",
  });
});
