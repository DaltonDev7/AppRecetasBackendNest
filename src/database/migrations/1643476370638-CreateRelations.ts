import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelations1643476370638 implements MigrationInterface {
    name = 'CreateRelations1643476370638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tareas\` ADD \`IdUsuario\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
        await queryRunner.query(`ALTER TABLE \`tareas\` DROP COLUMN \`IdUsuario\``);
    }

}
