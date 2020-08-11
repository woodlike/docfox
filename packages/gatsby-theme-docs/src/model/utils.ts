import { Frontmatter } from '.';

export function hyphenize(str: string): string {
  return str.toLowerCase().replace(/\s/g, '-').trim();
}

export const slugify = (frontmatter: Frontmatter): string => {
  if (!frontmatter || !frontmatter.menu || !frontmatter.name) {
    console.error(
      '🚨  ERROR: We can not create a slug with out a Frontmatter name and menu',
    );
    return '';
  }
  const basePath = '/';
  const { menu, name } = frontmatter;
  return `/${basePath}/${hyphenize(menu)}/${hyphenize(name)}`.replace(
    /\/\/+/g,
    '/',
  );
};
