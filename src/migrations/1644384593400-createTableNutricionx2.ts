import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableNutricionx21644384593400 implements MigrationInterface {
    name = 'createTableNutricionx21644384593400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nutricion\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Calorias\` decimal NULL, \`Grasas\` decimal NULL, \`Azucares\` decimal NULL, \`Proteinas\` decimal NULL, \`Sodio\` decimal NULL, \`Carbohidratos\` decimal NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Calorias\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Grasas\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Azucares\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Proteinas\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Sodio\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Carbohidratos\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Carbohidratos\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Sodio\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Proteinas\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Azucares\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Grasas\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Calorias\` decimal NULL`);
        await queryRunner.query(`DROP TABLE \`nutricion\``);
    }

}
