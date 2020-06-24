import { Reporter } from 'gatsby';
import { NodeDocument, slugify } from '.';

export interface SlugResolver {
  Doc: {
    slug: {
      resolve: ({ frontmatter }: NodeDocument) => Promise<string>;
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
    },
  };
}

export function createMenuResolver(): {} {
  return {
    MenuCollection: {
      collection: {
        resolve: async (): Promise<number[]> => {
          // TODO remove dummy resolver to handle menu
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
