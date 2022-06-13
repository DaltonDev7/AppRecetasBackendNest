import {MigrationInterface, QueryRunner} from "typeorm";

export class createAllTables1645029866871 implements MigrationInterface {
    name = 'createAllTables1645029866871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pasos_recetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdPostReceta\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rol\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tareas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(258) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdUsuario\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombres\` varchar(25) NOT NULL, \`UserName\` varchar(50) NOT NULL, \`Email\` varchar(50) NULL, \`PassWord\` varchar(255) NULL, \`Apellidos\` varchar(25) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, UNIQUE INDEX \`IDX_fbc5487708c498b233485ab44b\` (\`UserName\`), UNIQUE INDEX \`IDX_1982e89c37d5663406133e30db\` (\`Email\`), PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingredientesrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdPostReceta\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nutricion\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Calorias\` decimal NULL, \`Grasas\` decimal NULL, \`Azucares\` decimal NULL, \`Proteinas\` decimal NULL, \`Sodio\` decimal NULL, \`Carbohidratos\` decimal NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdPostReceta\` int NULL, UNIQUE INDEX \`REL_b456bef7dc7ff2f49d77001376\` (\`IdPostReceta\`), PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`postrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Titulo\` varchar(100) NOT NULL, \`Descripcion\` varchar(255) NULL, \`CantidadPersona\` int NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdUsuario\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`imagenesrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`NombreRuta\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdPostReceta\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios_roles\` (\`IdUsuario\` int NOT NULL, \`IdRol\` int NOT NULL, INDEX \`IDX_f726b32c9ae7a41f1edde7295c\` (\`IdUsuario\`), INDEX \`IDX_e95d95b16547ceae00d04bdf68\` (\`IdRol\`), PRIMARY KEY (\`IdUsuario\`, \`IdRol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pasos_recetas\` ADD CONSTRAINT \`FK_b427cda544b3901dec0cb715a86\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD CONSTRAINT \`FK_5768adc53529b989bab92c94fd4\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`nutricion\` ADD CONSTRAINT \`FK_b456bef7dc7ff2f49d770013769\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD CONSTRAINT \`FK_708b9d6209fb6671278e17e19e0\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`imagenesrecetas\` ADD CONSTRAINT \`FK_7ef951706d98fd0b24462e86be4\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` ADD CONSTRAINT \`FK_f726b32c9ae7a41f1edde7295cc\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` ADD CONSTRAINT \`FK_e95d95b16547ceae00d04bdf687\` FOREIGN KEY (\`IdRol\`) REFERENCES \`rol\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` DROP FOREIGN KEY \`FK_e95d95b16547ceae00d04bdf687\``);
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` DROP FOREIGN KEY \`FK_f726b32c9ae7a41f1edde7295cc\``);
        await queryRunner.query(`ALTER TABLE \`imagenesrecetas\` DROP FOREIGN KEY \`FK_7ef951706d98fd0b24462e86be4\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP FOREIGN KEY \`FK_708b9d6209fb6671278e17e19e0\``);
        await queryRunner.query(`ALTER TABLE \`nutricion\` DROP FOREIGN KEY \`FK_b456bef7dc7ff2f49d770013769\``);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP FOREIGN KEY \`FK_5768adc53529b989bab92c94fd4\``);
        await queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
        await queryRunner.query(`ALTER TABLE \`pasos_recetas\` DROP FOREIGN KEY \`FK_b427cda544b3901dec0cb715a86\``);
        await queryRunner.query(`DROP INDEX \`IDX_e95d95b16547ceae00d04bdf68\` ON \`usuarios_roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_f726b32c9ae7a41f1edde7295c\` ON \`usuarios_roles\``);
        await queryRunner.query(`DROP TABLE \`usuarios_roles\``);
        await queryRunner.query(`DROP TABLE \`imagenesrecetas\``);
        await queryRunner.query(`DROP TABLE \`postrecetas\``);
        await queryRunner.query(`DROP INDEX \`REL_b456bef7dc7ff2f49d77001376\` ON \`nutricion\``);
        await queryRunner.query(`DROP TABLE \`nutricion\``);
        await queryRunner.query(`DROP TABLE \`ingredientesrecetas\``);
        await queryRunner.query(`DROP INDEX \`IDX_1982e89c37d5663406133e30db\` ON \`usuarios\``);
        await queryRunner.query(`DROP INDEX \`IDX_fbc5487708c498b233485ab44b\` ON \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`tareas\``);
        await queryRunner.query(`DROP TABLE \`rol\``);
        await queryRunner.query(`DROP TABLE \`pasos_recetas\``);
    }

}
