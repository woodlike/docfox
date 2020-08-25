import { slugify, Doc } from '.';

export interface Menu {
  readonly category: string;
  readonly items: MenuItem[];
}

export interface MenuItem {
  readonly name: string;
  readonly slug: string;
}

export interface MenuFactory {
  create(docs: Doc[]): Menu[];
}

function create(docs: Doc[]) {
  return docs.reduce<Menu[]>((acc, doc) => {
    const { frontmatter } = doc;
    const category = frontmatter.menu.toLowerCase();
    const categoryIdx = acc.findIndex(menu => menu.category === category);

    const item: MenuItem = {
      name: frontmatter.name.toLowerCase(),
      slug: slugify(frontmatter),
    };

    if (categoryIdx === -1) {
      return [
        ...acc,
        {
          category,
          items: [item],
        },
      ];
    }

    const prevItems = acc[categoryIdx].items;
    acc.splice(categoryIdx, 1);

    return [
      ...acc,
      {
        category: category,
        items: [...prevItems, item],
      },
    ];
  }, []);
}

export const menu: MenuFactory = { create };
