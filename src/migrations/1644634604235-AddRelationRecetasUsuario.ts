import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationRecetasUsuario1644634604235 implements MigrationInterface {
    name = 'AddRelationRecetasUsuario1644634604235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`IdUsuario\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD CONSTRAINT \`FK_708b9d6209fb6671278e17e19e0\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP FOREIGN KEY \`FK_708b9d6209fb6671278e17e19e0\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`IdUsuario\``);
    }

}
