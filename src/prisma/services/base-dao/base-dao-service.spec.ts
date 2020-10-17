import { BaseDaoService } from './base-dao-service';

describe('BaseDaoService', () => {
  it('should be defined', () => {
    let prismaDelegate:any;
    expect(new BaseDaoService(prismaDelegate)).toBeDefined();
  });
});
