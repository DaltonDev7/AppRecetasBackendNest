import {MigrationInterface, QueryRunner} from "typeorm";

export class allTables1644117639461 implements MigrationInterface {
    name = 'allTables1644117639461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tareas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(258) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdUsuario\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombres\` varchar(25) NOT NULL, \`Email\` varchar(50) NULL, \`PassWord\` varchar(255) NULL, \`Apellidos\` varchar(25) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, UNIQUE INDEX \`IDX_1982e89c37d5663406133e30db\` (\`Email\`), PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rolesusuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`IdUsuario\` int NOT NULL, \`IdRol\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rol\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rolesusuarios\` ADD CONSTRAINT \`FK_3ace992774108b76af258f2bf6d\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rolesusuarios\` ADD CONSTRAINT \`FK_107cde6e2365ab0b7322dfdf74d\` FOREIGN KEY (\`IdRol\`) REFERENCES \`rol\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rolesusuarios\` DROP FOREIGN KEY \`FK_107cde6e2365ab0b7322dfdf74d\``);
        await queryRunner.query(`ALTER TABLE \`rolesusuarios\` DROP FOREIGN KEY \`FK_3ace992774108b76af258f2bf6d\``);
        await queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
        await queryRunner.query(`DROP TABLE \`rol\``);
        await queryRunner.query(`DROP TABLE \`rolesusuarios\``);
        await queryRunner.query(`DROP INDEX \`IDX_1982e89c37d5663406133e30db\` ON \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`tareas\``);
    }

}
