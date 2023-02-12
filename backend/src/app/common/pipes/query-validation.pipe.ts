import { BadRequestException, HttpException } from "@nestjs/common";
import { ArgumentMetadata, PipeTransform } from "@nestjs/common/interfaces";

export class QueryValidationPipe implements PipeTransform {



    transform(value: any, metadata: ArgumentMetadata) {

        if(!value){
           throw new BadRequestException("Query value invalid")
        }
        return value
    }

}