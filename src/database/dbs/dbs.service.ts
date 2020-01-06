import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class DbsService {
  private readonly connection = getConnection();
  async findAllDBs(params) {
    const values = Object.values(params);
    const sql = `select * from information_schema.TABLES where table_schema like '%?%'`;
    const result = await this.connection.query(sql, values);
    return result;
  }

  async findAllSchemas() {
    const sql = `select * from information_schema.SCHEMATA`;
    const result = await this.connection.query(sql);
    return result;
  }
}
