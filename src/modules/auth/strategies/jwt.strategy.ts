import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Repository } from "typeorm";
import { IJwtPayload } from "../../../core/interfaces/jwt-payload.interface";
import { Usuario } from "../../../entities/Usuario";


export class JwtStrategyService extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.JWT_SECRET
        })
    }

    async validate(data:IJwtPayload){
        const user = await this.usersRepository.findOne({ Email : data.Email })

        if(!user) throw new UnauthorizedException()

        return user;

    }


}