# Folder Structure

```
| Folder/File                      | Description                                             |
|----------------------------------|---------------------------------------------------------|
| .github                          | GitHub configuration directory                          |
| ├── workflows                    | Directory for GitHub Actions workflows                  |
| │   └── test.yml                 | GitHub Actions workflow for testing                     |
| .husky                           | Husky Git hooks directory                               |
| .vscode                          | Visual Studio Code configuration directory              |
| │   └── settings.json            | Visual Studio Code settings                             |
| documentation                    | Documentation directory                                 |
| src                              | Source code directory                                   |
| ├── commands                     | Directory for command scripts                           |
| │   ├── drop_tables.ts           | Command script to drop tables                           |
| │   ├── migrate.ts               | Command script to migrate database                      |
| │   └── seed.ts                  | Command script to seed database                         |
| ├── entities                     | Directory for entity definitions                        |
| │   ├── request_response_logs.ts | Entity definition for request/response logs             |
| ├── index.ts                     | Main entry point script                                 |
| ├── migrator.ts                  | Script for migration                                    |
| ├── connection.ts                | Database connection script                              |
| ├── seeder.ts                    | Script for seeding                                      |
| └── seeds                        | Directory for seed data                                 |
|     ├── request_response_logs.ts | Seed data for request/response logs                     |
| config                           | Configuration directory                                 |
| ├── app.ts                       | Application configuration file                          |
| ├── config.test.ts               | Test configuration file                                 |
| ├── config.ts                    | Configuration file                                      |
| └── database.ts                  | Database configuration file                             |
| .env                             | Environment configuration file                          |
| .gitignore                       | Git ignore file                                         |
| README.md                        | Main documentation file                                 |
| example.env                      | Example environment configuration file                  |
| makefile                         | Makefile for automation tasks                           |
| package-lock.json                | NPM package lock file                                   |
| package.json                     | NPM package configuration file                          |
| tsconfig.json                    | TypeScript configuration file                           |
```
