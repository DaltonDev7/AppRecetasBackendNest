import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostRecetas } from './PostRecetas';


@Entity('nutricion')
export class Nutricion extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;


    @Column({
        nullable: true,
        type: "decimal",
    })
    Calorias: number

    @Column({
        nullable: true,
        type: "decimal",
    })
    Grasas: number

    @Column({
        nullable: true,
        type: "decimal",
    })
    Azucares: number

    @Column({
        nullable: true,
        type: "decimal",
    })
    Proteinas: number

    @Column({
        nullable: true,
        type: "decimal",
    })
    Sodio: number

    @Column({
        nullable: true,
        type: "decimal",
    })
    Carbohidratos: number

    @Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    })
    FechaCreacion: Date;

    @Column({
        nullable: true
    })
    FechaModificacion: Date;


    @OneToOne(() => PostRecetas)
    @JoinColumn({
        name: 'IdPostReceta'
    })
    PostRecetas: PostRecetas
}