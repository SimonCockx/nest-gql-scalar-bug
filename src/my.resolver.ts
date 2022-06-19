import { Query, Resolver } from '@nestjs/graphql';
import { MyObject } from './my-object';

@Resolver(() => MyObject)
export class MyResolver {
  @Query(() => MyObject, { name: 'object' })
  async getObject() {
    return { n: 42 };
  }
}
