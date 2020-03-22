import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';


import { ItemDto } from 'dto/item.dto';
import { ListEntity } from './list.entity';
import { UserEntity } from './user.entity';
import { TagEntity } from './tag.entity';

@Entity()
export class ItemEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public link: string;

    @Column()
    public title: string;

    @Column()
    public type: string;

    @Column()
    public language: string;

    @Column()
    public author: string;

    @Column()
    public description: string;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    @ManyToOne(type => UserEntity, user => user.id)
    user: UserEntity;

   @ManyToMany(type => TagEntity, tag => tag.id)
   @JoinTable()
   tags: TagEntity[]; 

   @ManyToMany(type => ListEntity, list => list.items)
   lists: ListEntity[];

    public static createFromDto(dto: ItemDto): ItemEntity {
        const entity = new ItemEntity();
        entity.id = dto.id;
        entity.link = dto.link;
        entity.title = dto.title;
        entity.type = dto.type;
        entity.language = dto.language;
        entity.author = dto.author;
        entity.description = dto.description;

        return entity;
    }
}