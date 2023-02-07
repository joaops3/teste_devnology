import { BadRequestException, HttpException } from "@nestjs/common";
import { ArgumentMetadata, PipeTransform } from "@nestjs/common/interfaces";

export class PlayerQueryPipe implements PipeTransform {



    transform(value: any, metadata: ArgumentMetadata) {

        if(!value){
           throw new BadRequestException("Query value invalido")
        }
        return value
    }

}