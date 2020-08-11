import { resolve } from 'path';
import { Actions, Reporter } from 'gatsby';
import { NodeDocument } from '.';

export interface CreatePagesArgs {
  readonly actions: Actions;
  readonly reporter: Reporter;
  graphql: (query: string) => Promise<DocQuery>;
}

interface DocQuery {
  readonly data: DocQueryData;
  readonly errors: boolean;
}

export interface DocQueryData {
  readonly allDoc: {
    readonly nodes: Pick<NodeDocument, 'id' | 'slug'>[];
  };
}

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs): Promise<void> => {
  const { createPage } = actions;

  const result: DocQuery = await graphql(`
    query {
      allDoc {
        nodes {
          id
          slug
        }
      }
    }
  `);
  const { errors, data } = result;

  if (errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  data.allDoc.nodes.forEach(doc => {
    const { id, slug } = doc;
    createPage({
      path: slug,
      component: resolve('./src/components/TemplateDoc.tsx'),
      context: {
        id: id,
      },
    });
  });
};
