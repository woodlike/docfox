import { theme as wdlkTheme } from '@wdlk/components';

export interface ThemeDoc {
  readonly breakpoints: string[];
  readonly borderWidths: number[];
  readonly colors: {
    readonly [key: string]: string | string[];
  };
  readonly letterSpacings: number[];
  readonly fonts: ThemeFonts;
  readonly navigationTab: string;
  readonly space: number[];
}

export interface ThemeFonts {
  readonly body: string;
  readonly heading: {
    readonly display: string;
  };
  readonly monospace: string;
}

const breakpoints = ['480px', '769px', '1024px', '1440px'];
const navigationTab = 60;

const theme: ThemeDoc = {
  colors: {
    ...wdlkTheme.colors,
  },

  ...wdlkTheme,
  breakpoints,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  fonts: {
    ...wdlkTheme.fonts,
    monospace: `"IBM Plex Mono", monospace`,
  },
  navigationTab,
  plain: {
    backgroundColor: 'white',
  },
};

export default theme;
