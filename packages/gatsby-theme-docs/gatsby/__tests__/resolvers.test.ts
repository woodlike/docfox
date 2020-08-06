import { gatsby } from '../../__mocks__/';
import { createSlugResolver, createMenuResolver } from '..';
import { Reporter } from 'gatsby';

describe('resolvers', () => {
  it('should match a Doc slug resolver', () => {
    expect(createSlugResolver(gatsby.reporter as Reporter))
      .toMatchInlineSnapshot(`
      Object {
        "Doc": Object {
          "slug": Object {
            "resolve": [Function],
          },
        },
      }
    `);
  });

  describe('createMenuResolver()', () => {
    it('creates a Menu Gatsby Node', async () => {
      expect(createMenuResolver(gatsby.reporter as Reporter))
        .toMatchInlineSnapshot(`
        Object {
          "MenuCollection": Object {
            "menu": Object {
              "resolve": [Function],
            },
          },
        }
      `);
    });
  });
});
