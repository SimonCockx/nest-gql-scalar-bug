import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('MyCustomScalar')
export class MyCustomScalar implements CustomScalar<string, string> {
  description = 'A dummy scalar';

  parseValue(value: unknown): string {
    if (typeof value !== 'string') {
      throw new Error(`Expected a string, but got ${value}.`);
    }
    return value;
  }

  serialize(obj: unknown): string {
    if (typeof obj !== 'string') {
      throw new Error(`Expected a string, but got ${obj}.`);
    }
    return obj;
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    throw new Error(
      `Expected value of kind 'STRING', but got kind '${ast.kind}'.`,
    );
  }
}
