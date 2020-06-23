import { Reporter } from 'gatsby';
import { createSlugResolver } from '..';

describe('resolvers', () => {
  it('should match a Doc slug resolver', () => {
    expect(createSlugResolver({} as Reporter)).toMatchInlineSnapshot(`
      Object {
        "Doc": Object {
          "slug": Object {
            "resolve": [Function],
          },
        },
      }
    `);
  });
});
