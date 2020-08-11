import { NodeInput } from 'gatsby';
import { Section, Frontmatter } from '.';

export interface Doc extends NodeInput {
  readonly id: string;
  readonly sections: Section[];
  readonly frontmatter: Frontmatter;
}
