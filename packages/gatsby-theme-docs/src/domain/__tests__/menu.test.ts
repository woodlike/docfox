import { menu } from '../';
import { records } from '../../__mocks__';

describe('Menu domain model', () => {
  describe('menu.create()', () => {
    it('should create an instace of the Menu Domain Model', () => {
      expect(menu.create(records)).toMatchInlineSnapshot(`
        Array [
          Object {
            "category": "/",
            "items": Array [
              Object {
                "name": "intro",
                "slug": "/intro",
              },
            ],
          },
          Object {
            "category": "components",
            "items": Array [
              Object {
                "name": "code",
                "slug": "/components/code",
              },
              Object {
                "name": "heading",
                "slug": "/components/heading",
              },
              Object {
                "name": "video",
                "slug": "/components/video",
              },
            ],
          },
          Object {
            "category": "hocs",
            "items": Array [
              Object {
                "name": "with focus style",
                "slug": "/hocs/with-focus-style",
              },
            ],
          },
        ]
      `);
    });
  });
});
