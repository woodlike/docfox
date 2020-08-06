import { Actions, Reporter } from 'gatsby';

export interface CreateSchemaProps {
  actions: Actions;
}

export interface CreateSlugProps {
  createResolvers: ({}) => void;
  reporter: Reporter;
}

export const createSchema = ({ actions }: CreateSchemaProps): void => {
  const { createTypes } = actions;
  const typeDefs = [
    `type Doc implements Node @dontInfer {
      id: ID!
      name: String!
      frontmatter: Frontmatter!
      docs: [Docs!]!
      slug: String!
    }
    type Docs {
      id: ID!
      body: String!
      display: String
    }
    type Frontmatter {
      name: String!
      menu: String!
      title: String
    }
    type MenuCollection implements Node @dontInfer {
      menu: [Menu!]!
    }
    type Menu {
      category: String!
      items: [MenuItem!]!
    }
    type MenuItem {
      name: String!
      slug: String!
    }
    `,
  ];
  createTypes(typeDefs);
};
