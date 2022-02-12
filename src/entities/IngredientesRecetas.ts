import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { PostRecetas } from "./PostRecetas";



@Entity('ingredientesrecetas')
export class IngredientesRecetas extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    Id: number;

    PostRecetas: PostRecetas

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
}