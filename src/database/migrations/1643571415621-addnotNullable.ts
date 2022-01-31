import {MigrationInterface, QueryRunner} from "typeorm";

export class addnotNullable1643571415621 implements MigrationInterface {
    name = 'addnotNullable1643571415621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_3b03fe8f236d483cf6f49700c81\` ON \`tareas\``);
        await queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`IdUsuario\` \`IdUsuario\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
        await queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`IdUsuario\` \`IdUsuario\` int NULL`);
        await queryRunner.query(`CREATE INDEX \`FK_3b03fe8f236d483cf6f49700c81\` ON \`tareas\` (\`IdUsuario\`)`);
    }

}
