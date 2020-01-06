import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connect } from './Connect.entity';
import { Repository } from 'typeorm';
import * as uuidv4 from 'uuid/v4';
@Injectable()
export class ConnectService {
  constructor(
    @InjectRepository(Connect)
    private readonly connectRepository: Repository<Connect>,
  ) {}

  async insert(connect: Connect) {
    connect.sourceid = uuidv4();
    return await this.connectRepository.insert(connect);
  }

  async findAll() {
    return await this.connectRepository.find();
  }
}
