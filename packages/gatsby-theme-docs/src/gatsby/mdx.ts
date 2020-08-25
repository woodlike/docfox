import yaml from 'yaml';

import { Frontmatter } from '.';

export interface MDXAst {
  type: string;
  children: MDXAstNode[];
}

export interface MDXAstNode {
  type: string;
  position: MDXAstNodePosition;
  value?: string;
  depth?: number;
  children?: MDXAstNode[];
}

export interface MDXAstNodePosition {
  start: Position;
  end: Position;
  indent: number[] | [];
}

export interface Position {
  line: number;
  column: number;
  offset: number;
}

export function getDisplay(mdxAst: MDXAst): string {
  const node = mdxAst.children.find(
    ({ value }) => typeof value === 'string' && value.includes('_display'),
  );

  const regex = /(^(export(\s|)const(\s|)_display(\s|)=(\s`|`))|^(const(\s|)_display(\s|)=(\s`|`))|(`;))/g;
  return node && node.value ? node.value.replace(regex, '') : '';
}

export function getFrontmatter(mdxAst: MDXAst): Frontmatter {
  const node = mdxAst.children.find(node => node.type === 'yaml' && node.value);
  return node && node.value
    ? yaml.parse(node.value)
    : { menu: '', name: '', title: '' };
}

export function extractFrontmatter(data: string): string {
  return data.replace(/(^---\s*\n([a-z]*:\s*.*\n){1,5}---)/gim, '');
}

export const findNodeByType = (
  mdxAst: MDXAst,
  type: string,
): MDXAstNode | Record<string, unknown> =>
  mdxAst.children.find(node => node.type === type && node.value) || {};
