import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationPostRecetasIngredienteReceta1644635325277 implements MigrationInterface {
    name = 'AddRelationPostRecetasIngredienteReceta1644635325277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD \`IdPostReceta\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD CONSTRAINT \`FK_5768adc53529b989bab92c94fd4\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP FOREIGN KEY \`FK_5768adc53529b989bab92c94fd4\``);
        await queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP COLUMN \`IdPostReceta\``);
    }

}
