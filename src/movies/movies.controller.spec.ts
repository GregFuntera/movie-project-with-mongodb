import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';

describe('Movies Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MoviesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MoviesController = module.get<MoviesController>(MoviesController);
    expect(controller).toBeDefined();
  });
});
