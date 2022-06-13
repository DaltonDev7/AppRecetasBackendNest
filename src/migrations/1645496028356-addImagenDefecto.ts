import {MigrationInterface, QueryRunner} from "typeorm";

export class addImagenDefecto1645496028356 implements MigrationInterface {
    name = 'addImagenDefecto1645496028356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`ImagenDefecto\` tinyint NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`ImagenDefecto\``);
    }

}
