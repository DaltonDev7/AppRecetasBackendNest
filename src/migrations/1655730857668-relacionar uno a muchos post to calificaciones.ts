import {MigrationInterface, QueryRunner} from "typeorm";

export class relacionarUnoAMuchosPostToCalificaciones1655730857668 implements MigrationInterface {
    name = 'relacionarUnoAMuchosPostToCalificaciones1655730857668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD \`IdPostReceta\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD CONSTRAINT \`FK_cc22499445ac90b990e8d4a6dd2\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP FOREIGN KEY \`FK_cc22499445ac90b990e8d4a6dd2\``);
        await queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP COLUMN \`IdPostReceta\``);
    }

}
