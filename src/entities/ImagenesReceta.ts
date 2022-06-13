import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostRecetas } from './PostRecetas';




@Entity('imagenesrecetas')
export class ImagenesRecetas extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;


    @ManyToOne(() => PostRecetas, (postRecetas) => postRecetas.ImagenesRecetas, { 
        //eager:true,
        nullable: false 
    })
    @JoinColumn({
        name: 'IdPostReceta',
    })
    PostRecetas: PostRecetas

    @Column({
        nullable: false,
        type:'varchar'
    })
    NombreRuta: string;

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