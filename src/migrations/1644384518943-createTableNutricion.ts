import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableNutricion1644384518943 implements MigrationInterface {
    name = 'createTableNutricion1644384518943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Titulo\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`ImgPost\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Descripcion\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Pasos\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Ingredientes\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Nutricion\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Calorias\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Grasas\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Azucares\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Proteinas\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Sodio\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Carbohidratos\` decimal NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Titulo\` varchar(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`ImgPost\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Descripcion\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Pasos\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Ingredientes\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Nutricion\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Nutricion\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Ingredientes\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Pasos\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Descripcion\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`ImgPost\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Titulo\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Carbohidratos\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Sodio\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Proteinas\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Azucares\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Grasas\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Calorias\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Nutricion\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Ingredientes\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Pasos\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Descripcion\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`ImgPost\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Titulo\` varchar(25) NOT NULL`);
    }

}
