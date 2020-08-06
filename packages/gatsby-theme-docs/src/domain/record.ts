import { NodeInput } from 'gatsby';
import { Doc, Frontmatter } from '.';

export interface Record extends NodeInput {
  readonly id: string;
  readonly docs: Doc[];
  readonly frontmatter: Frontmatter;
}
