import { Test, TestingModule } from '@nestjs/testing';
import { PostDaoService } from './post-dao.service';

describe('PostDaoService', () => {
  let service: PostDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostDaoService],
    }).compile();

    service = module.get<PostDaoService>(PostDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
