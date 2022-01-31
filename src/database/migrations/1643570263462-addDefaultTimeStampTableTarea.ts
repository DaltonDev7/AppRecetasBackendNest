import {MigrationInterface, QueryRunner} from "typeorm";

export class addDefaultTimeStampTableTarea1643570263462 implements MigrationInterface {
    name = 'addDefaultTimeStampTableTarea1643570263462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL`);
    }

}
