import {MigrationInterface, QueryRunner} from "typeorm";

export class cambiandoNumeroPost1644715670665 implements MigrationInterface {
    name = 'cambiandoNumeroPost1644715670665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` varchar(255) NULL`);
       
    }

}
