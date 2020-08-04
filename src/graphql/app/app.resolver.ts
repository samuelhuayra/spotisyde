import { Args, Query, Resolver } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('App')
export class AppResolver {
    cats = [{
      id: 1,
      name: 'Mjau',
      age: 17
    }]
  
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Query()
    getCats() {
      console.log('getCats');
      return this.cats;
    }
  
    @Query('cat')
    async findOneById(
      @Args('id', ParseIntPipe)
      id: number,
    ): Promise<any> {
      return this.cats.find(c => c.id === id);
    }
}
