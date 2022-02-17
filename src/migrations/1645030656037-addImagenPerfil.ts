import {MigrationInterface, QueryRunner} from "typeorm";

export class addImagenPerfil1645030656037 implements MigrationInterface {
    name = 'addImagenPerfil1645030656037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`ImagenPerfil\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`ImagenPerfil\``);
    }

}
