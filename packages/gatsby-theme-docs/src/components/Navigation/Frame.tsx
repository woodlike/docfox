import React from 'react';
import { css } from '@emotion/core';

import styled from '../styled';
import { ThemeDoc } from '../../gatsby-plugin-theme-ui';

export interface NavigationFrameProps {
  readonly isOpen: boolean;
  readonly onClick: React.MouseEventHandler<HTMLElement>;
}

interface StyledNavFrameProps {
  readonly isOpen: boolean;
  readonly theme: ThemeDoc;
}

const createStylesTransform = (props: StyledNavFrameProps) => css`
  transform: ${props.isOpen
    ? `translate3d(0, 0, 0)`
    : `translate3d(0, calc(-100% + ${props.theme.navigationTab}px), 0)`};
  transition: transform 300ms ease-in-out;

  :hover {
    transform: translate3d(
      0,
      calc(-100% + ${props.theme.navigationTab + props.theme.space[2]}px),
      0
    );
    transition-duration: 100ms;
  }

  @media (min-width: ${props.theme.breakpoints[2]}) {
    transform: ${props.isOpen
      ? `translate3d(0, 0, 0)`
      : `translate3d(calc(-100% + ${props.theme.navigationTab}px),0,0)`};

    :hover {
      transform: ${props.isOpen
        ? `translate3d(0, 0, 0)`
        : `translate3d(
            calc(-100% + ${props.theme.navigationTab + props.theme.space[2]}px),
            0,
            0)`};
    }
  }
`;

const StyledNavFrame = styled.nav<StyledNavFrameProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) =>
    `${theme.navigationTab}px ${theme.space[4]}px ${theme.space[4]}px`};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.whites[4]};

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      width: 80vw;
      padding: ${theme.space[6]}px ${theme.space[6]}px
        ${theme.space[6] + theme.navigationTab}px;
    }

    @media (min-width: ${theme.breakpoints[3]}) {
      padding: ${theme.space[8]}px ${theme.space[8]}px
        ${theme.space[8] + theme.navigationTab}px;
    }
  `};

  ${props => createStylesTransform(props)};
`;

StyledNavFrame.displayName = 'StyledNavFrame';

export const Frame: React.FC<NavigationFrameProps> = props => (
  <StyledNavFrame isOpen={props.isOpen} onClick={props.onClick}>
    {props.children}
  </StyledNavFrame>
);

Frame.displayName = 'Navigation.Frame';
