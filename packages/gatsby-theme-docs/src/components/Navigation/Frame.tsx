/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeDoc } from '../../gatsby-plugin-theme-ui';

export interface NavigationFrameProps {
  readonly isOpen: boolean;
  readonly onClick: React.MouseEventHandler<HTMLElement>;
}

const stylesTransform: SxStyleProp = {
  transform: ({ navigationTab }: ThemeDoc) => [
    `translate3d(0, calc(-100% + ${navigationTab}px),0)`,
    `translate3d(0, calc(-100% + ${navigationTab}px),0)`,
    `translate3d(calc(-100% + ${navigationTab}px),0,0)`,
  ],
  transition: 'transform 300ms ease-in-out',
  cursor: 'pointer',
  ':hover': {
    transform: ({ navigationTab, space }: ThemeDoc) => [
      `translate3d(0, calc(-100% + ${navigationTab + space[2]}px),0)`,
      `translate3d(0, calc(-100% + ${navigationTab + space[2]}px),0)`,
      `translate3d(calc(-100% + ${navigationTab + space[2]}px),0,0)`,
    ],
    transitionDuration: '100ms',
  },
};

const createResponsiveSpacing = (space: number[]) => [
  `${space[4]}px`,
  `${space[4]}px`,
  `${space[6]}px`,
  `${space[8]}px`,
];

const stylesSpace: SxStyleProp = {
  paddingTop: ({ navigationTab, space }: ThemeDoc) => [
    `${navigationTab}px`,
    `${navigationTab}px`,
    `${space[6]}px`,
    `${space[8]}px`,
  ],
  paddingRight: ({ space }: ThemeDoc) => createResponsiveSpacing(space),
  paddingBottom: ({ space }: ThemeDoc) => createResponsiveSpacing(space),
  paddingLeft: ({ navigationTab, space }: ThemeDoc) => [
    `${space[4]}px`,
    `${space[4]}px`,
    `${space[6] + navigationTab}px`,
    `${space[8] + navigationTab}px`,
  ],
};

const stylesNavigation: SxStyleProp = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  width: ['100vw', '100vw', '80vw'],
  height: '100vh',
  backgroundColor: ({ colors }: ThemeDoc) => colors.whites[4],
  ...stylesSpace,
  ...stylesTransform,
};

const createStylesFrame = (isOpen: boolean) => ({
  ...stylesNavigation,
  ...(isOpen && {
    transform: 'translate3d(0, 0, 0)',
    ':hover': { transform: 'translate3d(0, 0, 0)' },
  }),
});

export const Frame: React.FC<NavigationFrameProps> = props => (
  <nav onClick={props.onClick} sx={createStylesFrame(props.isOpen)}>
    {props.children}
  </nav>
);

Frame.displayName = 'Navigation.Frame';
