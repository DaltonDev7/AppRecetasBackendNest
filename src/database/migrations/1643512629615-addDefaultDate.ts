import {MigrationInterface, QueryRunner} from "typeorm";

export class addDefaultDate1643512629615 implements MigrationInterface {
    name = 'addDefaultDate1643512629615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL`);
    }

}
