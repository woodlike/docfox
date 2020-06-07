import { mdxAst } from '../../__mocks__';
import { findNodeByType, getDisplay } from '..';
import { MDXAst } from '../mdx';

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

  describe('getDisplay', () => {
    it('should return an empty string on missing AST node', () => {
      expect(getDisplay({ children: [{}] } as MDXAst)).toBe('');
      expect(
        getDisplay({
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
        } as MDXAst),
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
      ).toMatch(`\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`);
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
      ).toMatch(`\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`);
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
      ).toMatch(`\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`);
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
      ).toMatch(`\n<Heading as="h1" size="xxl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h2" size="xl">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h3" size="l">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h4" size="m">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="s">\n  Healing Flowers Collection\n</Heading>\n<Heading as="h5" size="xs">\n  Healing Flowers Collection\n</Heading>\n`);
    });
  });
});
