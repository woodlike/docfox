import { NodeInput } from 'gatsby';
import { extname, resolve } from 'path';
import { v3 as uuidv3 } from 'uuid';
import vfile from 'vfile';
import detectFrontmatter from 'remark-frontmatter';

import { createOptions, getDisplay, getFrontmatter, readDir, read } from '.';

// Using require to avoid error TS7016:
// Could not find a declaration file for module
const babel = require('@babel/core');
const { createCompiler } = require('@mdx-js/mdx');
const mdx = require('@mdx-js/mdx');

export type NodeDocument = Document & NodeInput & { slug: string };

export interface Document {
  readonly id: string;
  readonly body: string;
  readonly display: string;
  readonly frontmatter: Frontmatter;
}

export interface CodeDocument {
  readonly body: string;
  readonly display: string;
  readonly frontmatter: Frontmatter;
}

export interface Frontmatter {
  readonly menu: string;
  readonly name: string;
  readonly title?: string;
}

async function* collectContent(): AsyncGenerator<string, void, undefined> {
  const basePath = './content/';
  const dirs = await readDir(resolve(basePath));

  for await (const dir of dirs) {
    if (Boolean(extname(dir))) {
      yield await read(resolve(basePath, dir));
    } else {
      const files = await readDir(resolve(basePath, dir));
      for await (const file of files) {
        yield await read(resolve(basePath, dir, file));
      }
    }
  }
}

const mdxCompiler = createCompiler({
  remarkPlugins: [detectFrontmatter],
});

export async function transformCode(data: string): Promise<CodeDocument> {
  try {
    const jsx = await mdx(data);
    const mdxAst = mdxCompiler.parse(vfile(data));
    const { code } = babel.transform(jsx, createOptions());
    const { menu, name, title } = getFrontmatter(mdxAst);

    return {
      body: code,
      display: getDisplay(mdxAst),
      frontmatter: { menu, name, title },
    };
  } catch (err) {
    console.error(`🚨[ERROR] transforming content data: ${err}`);
    return {
      body: '',
      display: '',
      frontmatter: { title: '', menu: '', name: '' },
    };
  }
}

export async function create(): Promise<Map<string, Document[]>> {
  const docs = new Map<string, Document[]>();
  const collectedData = await collectContent();

  for await (const data of collectedData) {
    const { body, display, frontmatter } = await transformCode(data);
    const { menu, name, title } = frontmatter;

    const content = {
      id: uuidv3(data, '56079aea-8fc9-11ea-bc55-0242ac130003'),
      body: body
        // TODO: solve string replace more elegantly and
        // create a PR at Gatsby. This line was copied
        // from gatsby-plugin-mdx
        .replace(
          /export\s*default\s*function\s*MDXContent\s*/,
          `return function MDXContent`,
        )
        .replace(
          /export\s*{\s*MDXContent\s+as\s+default\s*};?/,
          `return MDXContent;`,
        ),
      display,
      frontmatter: { menu, name, title },
    };

    docs.set(name, [
      ...((docs.has(name) && Array.isArray(docs.get(name))
        ? docs.get(name)
        : []) as Document[]),
      content,
    ]);
  }
  return docs;
}
