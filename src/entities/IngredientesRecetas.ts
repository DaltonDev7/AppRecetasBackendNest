import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { PostRecetas } from "./PostRecetas";



@Entity('ingredientesrecetas')
export class IngredientesRecetas extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: 'varchar'
    })
    Descripcion: string;

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



    @ManyToOne(() => PostRecetas, (postRecetas) => postRecetas.IngredientesRecetas, { 
        //eager:true,
        nullable: false 
    })
    @JoinColumn({
        name: 'IdPostReceta',
    })
    PostRecetas: PostRecetas
}