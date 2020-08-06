/* eslint-disable @typescript-eslint/no-unused-vars */
import { NodeInput, Reporter } from 'gatsby';
import { NodeDocument, slugify } from '.';
import { menu, Menu, Record } from '../src/domain';

interface GatsbyContext {
  readonly nodeModel: NodeModel;
}

interface NodeModel {
  getAllNodes(init: { type: string }): Record[];
}

export function createSlugResolver(reporter: Reporter) {
  return {
    Doc: {
      slug: {
        resolve: async ({ frontmatter }: NodeDocument): Promise<string> =>
          slugify(frontmatter, reporter),
      },
    },
  };
}

export function createMenuResolver() {
  return {
    MenuCollection: {
      menu: {
        resolve: async (
          _src: NodeInput,
          _args: unknown,
          ctx: GatsbyContext,
        ): Promise<Menu[]> => {
          const records = ctx.nodeModel.getAllNodes({
            type: 'Doc',
          });
          return menu.create(records);
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
