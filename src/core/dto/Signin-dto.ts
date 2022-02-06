import { IsNotEmpty, IsString } from "class-validator"


export class SignInDTO {

    @IsNotEmpty()
    @IsString()
    Email: string

    @IsNotEmpty()
    @IsString()
    PassWord: string

}