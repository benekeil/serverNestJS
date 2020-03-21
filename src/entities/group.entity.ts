import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { GroupDto } from '../dto/group.dto';
import { UserEntity } from './user.entity';
import { ListEntity } from './list.entity';





@Entity()
export class GroupEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    

    

 @ManyToMany(type => UserEntity, user => user.groups)
   users: UserEntity[];

    @ManyToMany(type => ListEntity, list => list.groups)
    @JoinTable()
     lists: ListEntity[]

   

    public static createFromDto(dto: GroupDto): GroupEntity {
        const entity = new GroupEntity();
        entity.id = dto.id;
       
        entity.name = dto.name;
        

        return entity;
    }
}