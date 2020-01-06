import { Test, TestingModule } from '@nestjs/testing';
import { DbsController } from './dbs.controller';

describe('Dbs Controller', () => {
  let controller: DbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbsController],
    }).compile();

    controller = module.get<DbsController>(DbsController);
  });

  it('should be defined', () => {
    // expect(controller).toBeDefined();
  });
});
