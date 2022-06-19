import { Field, ObjectType } from '@nestjs/graphql';
import { MyCustomScalar } from './my-custom-scalar';

@ObjectType('OtherObject')
export class OtherObject {
  @Field(() => MyCustomScalar)
  field: string;
}
