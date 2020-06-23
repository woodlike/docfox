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

export function createCustomResolvers(
  createResolvers: ({}) => void,
  reporter: Reporter,
): void {
  const resolvers = {
    ...createSlugResolver(reporter),
  };
  createResolvers(resolvers);
}
