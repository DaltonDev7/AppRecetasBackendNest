import { Test, TestingModule } from '@nestjs/testing';
import { PostRecetaController } from './post-receta.controller';

describe('PostRecetaController', () => {
  let controller: PostRecetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostRecetaController],
    }).compile();

    controller = module.get<PostRecetaController>(PostRecetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
