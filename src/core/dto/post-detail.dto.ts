import { IngredientesRecetas } from "../../entities/IngredientesRecetas"
import { NivelDificultad } from "../../entities/NivelDificultad"
import { Nutricion } from "../../entities/Nutricion"
import { PasosRecetas } from "../../entities/PasosRecetas"

export interface PostDetailDTO{
    Id?:number
    Descripcion?:string 
    Titulo?:string 
    UsuarioNombre?:string 
    UsuarioApellido?:string 
    FechaCreacion?:Date 
    NivelDificultad?:NivelDificultad 
    PasosRecetas?:PasosRecetas[] 
    Ingredientes?:IngredientesRecetas[] 
    UsuarioImagen?:string;
    ImagenesPost:any
    CantidadPersona?:number;
    Nutricion?:Nutricion
  }