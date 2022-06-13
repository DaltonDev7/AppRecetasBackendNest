import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { IJwtPayload } from "../../../core/interfaces/jwt-payload.interface";
import { Usuario } from "../../../entities/Usuario";
import { JWT_SECRET } from '../../../core/constants/env.constants';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
        private readonly _configService: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: _configService.get(JWT_SECRET)


        })

    }

    async validate(data: IJwtPayload) {

        const user = await this.usersRepository.findOne({ Email: data.Email, Id: data.Id })
        if (!user) throw new UnauthorizedException('Credenciales erroneas aaaaaas')
        return user;

    }


}