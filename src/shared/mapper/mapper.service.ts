import { Injectable } from "@nestjs/common";
import { TypeMapper } from "ts-mapper";


@Injectable()
export class MapperService extends TypeMapper {


    constructor() {
        super();
        this.config()
    }

    private config():void {
        this.createMap()
    }

}