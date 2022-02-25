import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableNivelDifucultadyAddRelation1645739580103 implements MigrationInterface {
    name = 'createTableNivelDifucultadyAddRelation1645739580103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nivel-dificultad\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`IdNivelDificultad\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` ADD CONSTRAINT \`FK_d57996bb7756fdf24feaa03a2f4\` FOREIGN KEY (\`IdNivelDificultad\`) REFERENCES \`nivel-dificultad\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP FOREIGN KEY \`FK_d57996bb7756fdf24feaa03a2f4\``);
        await queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`IdNivelDificultad\``);
        await queryRunner.query(`DROP TABLE \`nivel-dificultad\``);
    }

}
