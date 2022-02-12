import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePasosRecetas1644384163378 implements MigrationInterface {
    name = 'createTablePasosRecetas1644384163378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` CHANGE \`Descripciom\` \`Descripcion\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE TABLE \`pasos_recetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP COLUMN \`Descripcion\``);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD \`Descripcion\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP COLUMN \`Descripcion\``);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD \`Descripcion\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`pasos_recetas\``);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` CHANGE \`Descripcion\` \`Descripciom\` varchar(255) NOT NULL`);
    }

}
