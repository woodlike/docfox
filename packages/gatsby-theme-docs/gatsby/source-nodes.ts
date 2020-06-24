import { Actions } from 'gatsby';
import { v3 as uuidv3 } from 'uuid';
import crypto from 'crypto';

import { document, Document } from '.';

export interface SourceNodesProps {
  actions: Actions;
}

async function sourceDocNode(
  docs: Map<string, Document[]>,
  actions: Actions,
): Promise<void> {
  const { createNode } = actions;
  for await (const name of docs.keys()) {
    const doc = docs.get(name)?.find((_, idx) => idx === 0);
    createNode({
      name,
      id: uuidv3(name, '670a67d2-a059-11ea-bb37-0242ac130002'),
      children: [],
      docs: docs.has(name) ? docs.get(name) : [],
      frontmatter: doc?.frontmatter,
      internal: {
        type: 'Doc',
        contentDigest: crypto.createHash('sha256').update(name).digest('hex'),
      },
    });
  }
}

function sourceMenuNode(actions: Actions): void {
  const { createNode } = actions;
  createNode({
    id: uuidv3('menu', '1ee420e6-40c1-4f11-885f-9ed659ac95ae'),
    children: [],
    internal: {
      type: 'MenuCollection',
      contentDigest: crypto.createHash('sha256').update('menu').digest('hex'),
    },
  });
}

export async function sourceNodes(actions: Actions): Promise<void> {
  const docs = await document.create();
  await sourceDocNode(docs, actions);
  sourceMenuNode(actions);
}
