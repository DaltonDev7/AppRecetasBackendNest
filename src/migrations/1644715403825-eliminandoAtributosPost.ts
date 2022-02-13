import {MigrationInterface, QueryRunner} from "typeorm";

export class eliminandoAtributosPost1644715403825 implements MigrationInterface {
    name = 'eliminandoAtributosPost1644715403825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`ImgPost\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Pasos\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Ingredientes\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Ingredientes\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Pasos\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`ImgPost\` varchar(255) NULL`);
    }

}
