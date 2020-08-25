import {
  dataNoFrontMatter,
  mdxAst,
  dataFrontMatterComplete,
  resultDataComplete,
  resultVideoName,
  dataFrontMatterVideoName,
  resultNameOnly,
  dataFrontMatterNameOnly,
} from '../../__mocks__';
import { extractFrontmatter, findNodeByType, getDisplay, MDXAst } from '..';

describe('MDX utils', () => {
  describe('findeNodeByType', () => {
    it('should return the Yaml node from the MDX AST', () => {
      const node = findNodeByType(mdxAst, 'yaml');
      expect(node).toStrictEqual({
        type: 'yaml',
        value: 'name: Heading\nmenu: Components',
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0,
          },
          end: {
            line: 4,
            column: 4,
            offset: 38,
          },
          indent: [1, 1, 1],
        },
      });
    });
  });

  describe('extractFrontmatter()', () => {
    it('should return the same input string as an output', () => {
      expect(extractFrontmatter(dataNoFrontMatter)).toMatch(dataNoFrontMatter);
    });
    it('should remove the complete  Frontmatter (name, title, menu)', () => {
      expect(extractFrontmatter(dataFrontMatterComplete)).toMatch(
        resultDataComplete,
      );
    });
    it('should remove the complete  Frontmatter (name, menu)', () => {
      expect(extractFrontmatter(dataFrontMatterVideoName)).toMatch(
        resultVideoName,
      );
    });
    it('should remove the complete  Frontmatter (name)', () => {
      expect(extractFrontmatter(dataFrontMatterNameOnly)).toMatch(
        resultNameOnly,
      );
    });
  });

  describe('getDisplay', () => {
    it('should return an empty string on missing AST node', () => {
      expect(getDisplay({ children: [{}] } as MDXAst)).toBe('');
      expect(
        getDisplay(({
          children: [
            {},
            {
              type: 'yaml',
              value: 'name: Heading\nmenu: Components',
              position: {
                start: {
                  line: 1,
                  column: 1,
                  offset: 0,
                },
                end: {
                  line: 4,
                  column: 4,
                  offset: 38,
                },
                indent: [1, 1, 1],
              },
            },
          ],
        } as unknown) as MDXAst),
      ).toBe('');
    });

    it('should return a sanitized code string for an exported _display', () => {
      expect(
        getDisplay(({
          children: [
            {
              type: 'export',
              value:
                'export const _display = `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`;',
            },
          ],
        } as unknown) as MDXAst),
      ).toMatch(
        `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`,
      );
    });

    it('should return a sanitized code string for an inline _display', () => {
      expect(
        getDisplay(({
          children: [
            {
              value:
                'const _display = `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`;',
            },
          ],
        } as unknown) as MDXAst),
      ).toMatch(
        `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`,
      );
    });

    it('should return a sanitized code string for an inline _display with out an ending ;', () => {
      expect(
        getDisplay(({
          children: [
            {
              value:
                'const _display = `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`',
            },
          ],
        } as unknown) as MDXAst),
      ).toMatch(
        `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`,
      );
    });

    it('should return a sanitized code string for an inline _display without ending spaces', () => {
      expect(
        getDisplay(({
          children: [
            {
              value:
                'const _display=`\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`',
            },
          ],
        } as unknown) as MDXAst),
      ).toMatch(
        `\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`,
      );
    });
  });
});
