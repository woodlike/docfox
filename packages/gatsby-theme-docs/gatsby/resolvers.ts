/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reporter } from 'gatsby';
import { NodeDocument, slugify } from '.';

export interface SlugResolver {
  Doc: {
    slug: {
      resolve: ({ frontmatter }: NodeDocument) => Promise<string>;
    };
    foo: {
      resolve: (source: any, args: any, context: any) => Promise<string>;
    };
  };
}

export function createSlugResolver(reporter: Reporter): SlugResolver {
  return {
    Doc: {
      slug: {
        resolve: async ({ frontmatter }: NodeDocument): Promise<string> =>
          slugify(frontmatter, reporter),
      },
      foo: {
        resolve: async (
          source: any,
          args: any,
          context: any,
        ): Promise<string> => {
          console.log('source------', source);
          console.log('args--------', args);
          console.log('context------', context);
          return 'fooooooooooooooooo';
        },
      },
    },
  };
}

export function createMenuResolver(): any {
  return {
    MenuCollection: {
      collection: {
        resolve: async (
          source: any,
          args: any,
          context: any,
        ): Promise<number[]> => {
          console.log('source', source);
          console.log('args', args);
          console.log('context', context);
          return [1, 2, 3];
        },
      },
    },
  };
}

export function createCustomResolvers(
  createResolvers: ({}) => void,
  reporter: Reporter,
): void {
  const resolvers = {
    ...createSlugResolver(reporter),
    ...createMenuResolver(),
  };
  createResolvers(resolvers);
}
