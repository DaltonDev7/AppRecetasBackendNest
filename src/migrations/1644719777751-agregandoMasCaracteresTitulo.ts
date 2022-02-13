import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoMasCaracteresTitulo1644719777751 implements MigrationInterface {
    name = 'agregandoMasCaracteresTitulo1644719777751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Titulo\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Titulo\` varchar(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Titulo\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Titulo\` varchar(25) NOT NULL`);
       
    }

}
