import { BaseService } from './base-service';

describe('BaseService', () => {
  it('should be defined', () => {
    let daoService:any;
    expect(new BaseService(daoService)).toBeDefined();
  });
});
