import { IsNotEmpty, IsString, Max, Min, IsEnum, IsDefined, IsBoolean } from 'class-validator';
import { Timestamp } from 'typeorm';
import { ListEntity } from 'entities/list.entity';

export class ListDto {

    public id: string;
    
    @IsBoolean()
    public public: boolean;


    public created: string;

    @IsNotEmpty()
    public name: string;

   

    public static createFromEntity(listEntity: ListEntity): ListDto {
        const list = new ListDto();
        list.id = listEntity.id;
        list.public = listEntity.public;
        list.created = listEntity.created;
        list.name = listEntity.name;
      
        return list;
    }
}