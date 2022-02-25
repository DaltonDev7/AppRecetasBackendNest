import { Test, TestingModule } from '@nestjs/testing';
import { ImagenesPostService } from './imagenes-post.service';

describe('ImagenesPostService', () => {
  let service: ImagenesPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenesPostService],
    }).compile();

    service = module.get<ImagenesPostService>(ImagenesPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
