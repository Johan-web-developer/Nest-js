import { Test, TestingModule } from '@nestjs/testing';
import { AstronautasController } from './astronautas.controller';

describe('AstronautasController', () => {
  let controller: AstronautasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AstronautasController],
    }).compile();

    controller = module.get<AstronautasController>(AstronautasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
