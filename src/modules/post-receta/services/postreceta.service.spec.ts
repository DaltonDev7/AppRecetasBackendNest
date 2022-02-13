import { Test, TestingModule } from '@nestjs/testing';
import { PostrecetaService } from './postreceta.service';

describe('PostrecetaService', () => {
  let service: PostrecetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostrecetaService],
    }).compile();

    service = module.get<PostrecetaService>(PostrecetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
