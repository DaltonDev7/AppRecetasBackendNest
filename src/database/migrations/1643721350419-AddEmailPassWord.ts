import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEmailPassWord1643721350419 implements MigrationInterface {
    name = 'AddEmailPassWord1643721350419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`Email\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD UNIQUE INDEX \`IDX_1982e89c37d5663406133e30db\` (\`Email\`)`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`PassWord\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`PassWord\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP INDEX \`IDX_1982e89c37d5663406133e30db\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`Email\``);
    }

}
