import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MyCustomScalar } from './my-custom-scalar';
import { MyResolver } from './my.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, 'schema.gql'),
    }),
  ],
  controllers: [],
  providers: [MyCustomScalar, MyResolver],
})
export class AppModule {}
