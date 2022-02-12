import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationPostRecetasImagenReceta1644635155654 implements MigrationInterface {
    name = 'AddRelationPostRecetasImagenReceta1644635155654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`imagenesrecetas\` ADD \`IdPostReceta\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`imagenesrecetas\` ADD CONSTRAINT \`FK_7ef951706d98fd0b24462e86be4\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`imagenesrecetas\` DROP FOREIGN KEY \`FK_7ef951706d98fd0b24462e86be4\``);
        await queryRunner.query(`ALTER TABLE \`imagenesrecetas\` DROP COLUMN \`IdPostReceta\``);
    }

}
