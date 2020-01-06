import { Module } from '@nestjs/common';
import { DbsController } from './dbs/dbs.controller';
import { DbsService } from './dbs/dbs.service';
import { ConnectController } from './connect/connect.controller';
import { ConnectService } from './connect/connect.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connect } from './connect/Connect.entity';
import { Dbs } from './dbs/dbs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Connect, Dbs])],
  controllers: [DbsController, ConnectController],
  providers: [DbsService, ConnectService],
})
export class DatabaseModule {}
