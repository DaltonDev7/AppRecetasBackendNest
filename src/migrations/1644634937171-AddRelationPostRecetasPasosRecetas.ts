import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationPostRecetasPasosRecetas1644634937171 implements MigrationInterface {
    name = 'AddRelationPostRecetasPasosRecetas1644634937171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pasos_recetas\` ADD \`IdPostReceta\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pasos_recetas\` ADD CONSTRAINT \`FK_b427cda544b3901dec0cb715a86\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pasos_recetas\` DROP FOREIGN KEY \`FK_b427cda544b3901dec0cb715a86\``);
        await queryRunner.query(`ALTER TABLE \`pasos_recetas\` DROP COLUMN \`IdPostReceta\``);
    }

}
