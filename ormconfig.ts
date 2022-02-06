import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'recetasdb',
    entities: ["dist/src/entities/**/*{.js,.ts}"],
    migrations :[
        "dist/src/migrations/*.js"
    ],
    cli:{
        migrationsDir:"src/migrations",
      //  entitiesDir: "src/database/entities",
    },
    synchronize: false,
    migrationsRun: false,
}

export default config;

