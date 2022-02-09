import {MigrationInterface, QueryRunner} from "typeorm";

export class addAllTables1644382140347 implements MigrationInterface {
    name = 'addAllTables1644382140347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tareas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(258) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdUsuario\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombres\` varchar(25) NOT NULL, \`Email\` varchar(50) NULL, \`PassWord\` varchar(255) NULL, \`Apellidos\` varchar(25) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, UNIQUE INDEX \`IDX_1982e89c37d5663406133e30db\` (\`Email\`), PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rol\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios_roles\` (\`IdUsuario\` int NOT NULL, \`IdRol\` int NOT NULL, INDEX \`IDX_f726b32c9ae7a41f1edde7295c\` (\`IdUsuario\`), INDEX \`IDX_e95d95b16547ceae00d04bdf68\` (\`IdRol\`), PRIMARY KEY (\`IdUsuario\`, \`IdRol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` ADD CONSTRAINT \`FK_f726b32c9ae7a41f1edde7295cc\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` ADD CONSTRAINT \`FK_e95d95b16547ceae00d04bdf687\` FOREIGN KEY (\`IdRol\`) REFERENCES \`rol\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` DROP FOREIGN KEY \`FK_e95d95b16547ceae00d04bdf687\``);
        await queryRunner.query(`ALTER TABLE \`usuarios_roles\` DROP FOREIGN KEY \`FK_f726b32c9ae7a41f1edde7295cc\``);
        await queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
        await queryRunner.query(`DROP INDEX \`IDX_e95d95b16547ceae00d04bdf68\` ON \`usuarios_roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_f726b32c9ae7a41f1edde7295c\` ON \`usuarios_roles\``);
        await queryRunner.query(`DROP TABLE \`usuarios_roles\``);
        await queryRunner.query(`DROP TABLE \`rol\``);
        await queryRunner.query(`DROP INDEX \`IDX_1982e89c37d5663406133e30db\` ON \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`tareas\``);
    }

}
