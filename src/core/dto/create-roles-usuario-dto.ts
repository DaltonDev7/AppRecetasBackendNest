import { IsNumber } from "class-validator";


export class CreateRoleUsuario{

    @IsNumber()
    Usuario:number;

    @IsNumber()
    Rol:number;

} 