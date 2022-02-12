import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationPostRecetasNutricion1644635947478 implements MigrationInterface {
    name = 'AddRelationPostRecetasNutricion1644635947478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`nutricion\` ADD \`IdPostReceta\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`nutricion\` ADD CONSTRAINT \`FK_b456bef7dc7ff2f49d770013769\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
