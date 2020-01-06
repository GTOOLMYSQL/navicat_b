import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';
import { DatabaseModule } from './database/database.module';
import { Connect } from './database/connect/Connect.entity';
import { Dbs } from './database/dbs/dbs.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '118.24.26.23',
      port: 7300,
      username: 'wym',
      password: 'qsx147852',
      database: 'dynamicform',
      entities: [Photo, Connect, Dbs],
      logging: true,
      synchronize: true,
    }),
    PhotoModule,
    DatabaseModule,
  ],
})
export class AppModule {
   
}
