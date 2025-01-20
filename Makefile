run:
	ts-node src/index.ts droptables
	ts-node src/index.ts migrate
	ts-node src/index.ts seed

	@echo "database migrated sucessfully"
