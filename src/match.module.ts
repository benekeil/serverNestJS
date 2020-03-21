import "reflect-metadata";
import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchEntity } from './entities/match.entity';
import { Connection } from 'typeorm';
import { ListEntity } from 'entities/list.entity';
import { ItemEntity } from 'entities/item.entity';
import { GroupEntity } from 'entities/group.entity';
import { UserEntity } from 'entities/user.entity';
import { TagEntity } from 'entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'devjetzt',
      entities: ['src/**/*.entity.ts'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([MatchEntity]),
    TypeOrmModule.forFeature([ListEntity]),
    TypeOrmModule.forFeature([ItemEntity]),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([GroupEntity]),
    TypeOrmModule.forFeature([TagEntity]),
  ],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule implements OnModuleDestroy, OnModuleInit {

  constructor(private readonly connection: Connection) {}

  async onModuleInit() {
    await this.connection.synchronize(true);
  }

  async onModuleDestroy() {
    await this.connection.close();
  }

}
