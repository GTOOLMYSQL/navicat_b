import { Test, TestingModule } from '@nestjs/testing';
import { DbsService } from './dbs.service';

describe('DbsService', () => {
  let service: DbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbsService],
    }).compile();

    service = module.get<DbsService>(DbsService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
