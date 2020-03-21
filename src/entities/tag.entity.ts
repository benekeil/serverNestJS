import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany } from 'typeorm';
import { GroupDto } from '../dto/group.dto';
import { ItemEntity } from './item.entity';





@Entity()
export class TagEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    

    

   @ManyToMany(type => ItemEntity, item => item.id)
   items: ItemEntity[];

    

   

    public static createFromDto(dto: GroupDto): TagEntity {
        const entity = new TagEntity();
        entity.id = dto.id;
       
        entity.name = dto.name;
        

        return entity;
    }
}