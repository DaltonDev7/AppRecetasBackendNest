"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'recetasdb',
    entities: ["dist/src/entities/**/*{.js,.ts}"],
    migrations: [
        "dist/src/migrations/*.js"
    ],
    cli: {
        migrationsDir: "src/migrations",
        //  entitiesDir: "src/database/entities",
    },
    synchronize: false,
    migrationsRun: false,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map