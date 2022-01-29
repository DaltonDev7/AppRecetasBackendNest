"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'apptareas',
    entities: ["dist/src/entities/**/*{.js,.ts}"],
    migrations: [
        "dist/src/database/migrations/*.js"
    ],
    cli: {
        migrationsDir: "src/database/migrations",
        //  entitiesDir: "src/database/entities",
    },
    synchronize: false,
    migrationsRun: false,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map