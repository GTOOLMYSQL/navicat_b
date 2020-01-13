import { Injectable } from '@nestjs/common';
import { getConnection, createConnection } from 'typeorm';
import { Connect } from '../connect/Connect.entity';

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
    // // 创建连接
    // const tempConnection = createConnection({
    //   type: 'mysql',
    //   host: connect.ip,
    //   port: parseInt(connect.port),
    //   username: connect.username,
    //   password: connect.password,
    // });

    // 从连接中获取数据库
    const sql = `select * from information_schema.SCHEMATA`;
    const result = await this.connection.query(sql);
    return result;
  }
}
