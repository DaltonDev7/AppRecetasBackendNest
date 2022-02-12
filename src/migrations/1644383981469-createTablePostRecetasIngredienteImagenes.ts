import {MigrationInterface, QueryRunner} from "typeorm";

export class createTablePostRecetasIngredienteImagenes1644383981469 implements MigrationInterface {
    name = 'createTablePostRecetasIngredienteImagenes1644383981469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`imagenesrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`NombreRuta\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingredientesrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripciom\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`postrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Titulo\` varchar(25) NOT NULL, \`ImgPost\` varchar(255) NULL, \`Descripcion\` varchar(255) NULL, \`Pasos\` varchar(255) NULL, \`Ingredientes\` varchar(255) NULL, \`Nutricion\` varchar(255) NULL, \`CantidadPersona\` varchar(255) NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`postrecetas\``);
        await queryRunner.query(`DROP TABLE \`ingredientesrecetas\``);
        await queryRunner.query(`DROP TABLE \`imagenesrecetas\``);
    }

}
