import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code, Language } from '@wdlk/components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

import { Burger, Navigation, TemplateLayout } from '.';
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
    <MDXProvider components={shortcodes}>
      {(doc.docs as Document[]).map((doc: Document) => (
        <TemplateLayout
          key={doc.id}
          code={
            <>
              {Boolean(doc.display) && (
                <Code code={doc.display || ''} lang={Language.tsx} size="m" />
              )}
            </>
          }
          menuIcon={
            <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          }
          navigation={
            <Navigation.Frame
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}>
              Hi mom!
            </Navigation.Frame>
          }>
          <MDXRenderer>{doc.body}</MDXRenderer>
        </TemplateLayout>
      ))}
    </MDXProvider>
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
