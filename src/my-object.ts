import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('MyObject')
export class MyObject {
  @Field(() => Int)
  n: number;
}
