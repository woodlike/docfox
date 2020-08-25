export interface Section {
  readonly body: string;
  readonly display: string;
  readonly id: string;
}

export interface Frontmatter {
  readonly menu: string;
  readonly name: string;
  readonly title: string | null;
}
