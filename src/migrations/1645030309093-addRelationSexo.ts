import {MigrationInterface, QueryRunner} from "typeorm";

export class addRelationSexo1645030309093 implements MigrationInterface {
    name = 'addRelationSexo1645030309093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sexo\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`IdSexo\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_bc8961ae83f69a42cb5be03cd5a\` FOREIGN KEY (\`IdSexo\`) REFERENCES \`sexo\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_bc8961ae83f69a42cb5be03cd5a\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`IdSexo\``);
        await queryRunner.query(`DROP TABLE \`sexo\``);
    }

}
