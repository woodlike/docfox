/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeDoc } from '../gatsby-plugin-theme-ui';

export interface BurgerProps {
  readonly isOpen: boolean;
  readonly onClick: React.MouseEventHandler<SVGElement>;
}

const WIDTH = 30;
const HEIGHT = 15;
const STROKE = 1;

const stylesBurger: SxStyleProp = {
  width: `${WIDTH}px`,
  height: `${HEIGHT}px`,
  color: ({ colors }: ThemeDoc) => colors.grays[2],
  cursor: 'pointer',
  fill: 'currentColor',
  stroke: 'currentColor',
  overflow: 'visible',
  strokeWidth: STROKE,
};

const stylesLines: SxStyleProp = {
  transformOrigin: 'center center',
  transition: 'transform 200ms linear',
};

const createStylesBottomLine = (isOpen: boolean): SxStyleProp => ({
  ...stylesLines,
  transform: isOpen ? 'rotate(-39deg) translate3d(-5%, -30%, 0)' : 'none',
});

const createStyleMidLine = (isOpen: boolean): SxStyleProp => ({
  opacity: isOpen ? 0 : 1,
});

const createStyleTopLine = (isOpen: boolean): SxStyleProp => ({
  ...stylesLines,
  transform: isOpen ? 'rotate(38deg) translate3d(5%,56%,0)' : 'none',
});

export const Burger: React.FC<BurgerProps> = ({ isOpen, onClick }) => (
  <svg
    sx={stylesBurger}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}>
    <line
      sx={createStyleTopLine(isOpen)}
      y1={`${STROKE}`}
      x2={`${WIDTH}`}
      y2={`${STROKE}`}></line>
    <line
      sx={createStyleMidLine(isOpen)}
      y1={`${HEIGHT / 2}`}
      x2={`${WIDTH}`}
      y2={`${HEIGHT / 2}`}></line>
    <line
      sx={createStylesBottomLine(isOpen)}
      y1={`${HEIGHT - STROKE}`}
      x2={`${WIDTH}`}
      y2={`${HEIGHT - STROKE}`}></line>
  </svg>
);
