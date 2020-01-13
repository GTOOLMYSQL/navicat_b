import { Controller, Get, Request, Param } from '@nestjs/common';
import { DbsService } from './dbs.service';

@Controller('dbs')
export class DbsController {
  constructor(private readonly dbsService: DbsService) {}
  @Get('/tables')
  getAllDbs(@Request() req) {
    const params = req.query;
    return this.dbsService.findAllDBs(params);
  }

  @Get('/schemas/:connectId')
  getAllSchemas(@Param() connectId: string) {
    return this.dbsService.findAllSchemas();
  }
}
