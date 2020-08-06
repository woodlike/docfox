import { Record } from '.';
import { slugify } from '.';

export interface Menu {
  readonly category: string;
  readonly items: MenuItem[];
}

export interface MenuItem {
  readonly name: string;
  readonly slug: string;
}

export interface MenuFactory {
  create(records: Record[]): Menu[];
}

function create(records: Record[]) {
  return records.reduce<Menu[]>((acc, record) => {
    const { frontmatter } = record;
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
