import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1643476283859 implements MigrationInterface {
    name = 'CreateTables1643476283859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tareas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(258) NOT NULL, \`FechaCreacion\` timestamp NOT NULL, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombres\` varchar(25) NOT NULL, \`Apellidos\` varchar(25) NOT NULL, \`FechaCreacion\` timestamp NOT NULL, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`tareas\``);
    }

}
