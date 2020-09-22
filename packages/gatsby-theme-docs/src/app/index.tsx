import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { MDXProvider } from '@mdx-js/react';
import { Code, Language } from '@wdlk/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

import { Burger, Navigation, TemplateLayout } from '../components';
import theme from '../components/theme';
import { Document, NodeDocument } from '../gatsby';

const shortcodes = { Link };

interface DocQuery {
  readonly data: {
    readonly doc: NodeDocument;
  };
}

export default function TemplateDoc({ data }: DocQuery): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  // TODO: make code component language configurable
  const { doc } = data;
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={shortcodes}>
        {(doc.docs as Document[]).map((doc: Document) => (
          <TemplateLayout
            key={doc.id}
            code={
              Boolean(doc.display) ? (
                <Code code={doc.display || ''} lang={Language.tsx} size="m" />
              ) : null
            }
            menuIcon={
              <Burger onClick={() => setIsOpen(!isOpen)} isActive={isOpen} />
            }
            navigation={
              <Navigation isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                Hi mom!
              </Navigation>
            }>
            <MDXRenderer>{doc.body}</MDXRenderer>
          </TemplateLayout>
        ))}
      </MDXProvider>
    </ThemeProvider>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    doc(id: { eq: $id }) {
      id
      docs {
        id
        display
        body
      }
    }
  }
`;
