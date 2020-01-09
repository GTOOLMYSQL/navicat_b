import { ConnectionManager, Connection } from "typeorm";

export class ConnectService {
  async createConnect() {
    const connectionManager = new ConnectionManager();
    const connect: Connection = connectionManager.create({
      type: 'mysql',
      host: '118.24.26.23',
      port: 7300,
      username: 'wym',
      password: 'qsx147852',
    });

    const e: Connection = await connect.connect();
    const d = await e.query(`
       SELECT * FROM information_schema.schemata
       `);
    e.close();
    return d;
  }
}
