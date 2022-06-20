import {MigrationInterface, QueryRunner} from "typeorm";

export class relacionarUsuarioConPostcalificaicon1655733351129 implements MigrationInterface {
    name = 'relacionarUsuarioConPostcalificaicon1655733351129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD \`IdUsuario\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD CONSTRAINT \`FK_f74749fb18868fcbc369c3efa06\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`post-calificaciones\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP FOREIGN KEY \`FK_f74749fb18868fcbc369c3efa06\``);
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP COLUMN \`IdUsuario\``);
    }

}
