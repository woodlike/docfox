import React from 'react';
import { css } from '@emotion/core';
import { Rows, Row } from '@wdlk/components';

import styled from './styled';
import { ThemeDoc } from '../gatsby-plugin-theme-ui';

export interface TemplateLayoutProps {
  readonly code: JSX.Element | null;
  readonly navigation: JSX.Element;
  readonly menuIcon: JSX.Element;
}

interface StyledSlotProps {
  readonly isSingleRow: boolean;
  readonly theme: ThemeDoc;
}

const createStylesContentRow = (props: StyledSlotProps) =>
  props.isSingleRow
    ? css`
        max-width: ${props.theme.breakpoints[2]};
      `
    : css`
        max-width: 50%;
        border-color: ${props.theme.colors.grays[0]};
        border-style: solid;
        border-width: 0 0 ${props.theme.borderWidths[0]}px;
      `;

const StyledContainer = styled.div`
  position: relative;
`;

StyledContainer.displayName = 'StyledContainer';

const StyledMainContent = styled.main`
  padding-top: ${({ theme }) => theme.navigationTab}px;
  ${({ theme }) =>
    css`
      @media (min-width: ${theme.breakpoints[1]}) {
        padding-top: 0;
        padding-left: ${theme.navigationTab}px;
      }
    `}
`;
StyledMainContent.displayName = 'StyledMainContent';

const StyledContentRow = styled(Row)<StyledSlotProps>`
  min-height: 100vh;
  padding: ${({ theme }) => `${theme.space[8]}px ${theme.space[4]}px`};
  ${props => {
    const { breakpoints, space } = props.theme;

    return css`
      @media (min-width: ${breakpoints[2]}) {
        padding: ${space[6]}px ${space[8]}px;
        ${createStylesContentRow(props)}
      }
    `;
  }}
`;

StyledContentRow.displayName = 'StyledContentRow';

const StyledCodeRow = styled(Row)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.space[8]}px ${theme.space[4]}px`};
  border-color: ${({ theme }) => theme.colors.whites[1]};
  border-style: solid;
  border-width: ${({ theme }) => `0 0 ${theme.borderWidths[0]}px`};
  background-color: ${({ theme }) => theme.colors.background};

  ${props => {
    const { breakpoints, colors, space } = props.theme;

    return css`
      @media (min-width: ${breakpoints[2]}) {
        padding: ${space[6]}px ${space[4]}px;
        background-color: ${colors.codeBg};
        border-color: ${colors.grays[4]};
      }
    `;
  }}
`;

StyledCodeRow.displayName = 'StyledCodeRow';

const StyledMenuIconSlot = styled.div`
  position: fixed;
  top: ${({ theme }) => `${theme.space[4]}px`};
  right: ${({ theme }) => `${theme.space[4]}px`};
  z-index: 3;

  ${props => {
    const { breakpoints, colors, space } = props.theme;

    return css`
      @media (min-width: ${breakpoints[2]}) {
        top: 50%;
        right: unset;
        left: ${space[3]}px;
        border-color: ${colors.grays[4]};
        transform: rotate(90deg);
      }
    `;
  }}
`;

StyledMenuIconSlot.displayName = 'StyledMenuIconSlot';

export const TemplateLayout: React.FC<TemplateLayoutProps> = props => (
  <StyledContainer>
    {props.navigation}
    <StyledMenuIconSlot>{props.menuIcon}</StyledMenuIconSlot>
    <StyledMainContent>
      <Rows collapseBelow={2} as="article">
        <StyledContentRow
          basis={Boolean(props.children) ? '1/2' : 'fluid'}
          isSingleRow={Boolean(props.children)}
          as="section">
          {props.children}
        </StyledContentRow>
        {Boolean(props.code) && (
          <StyledCodeRow basis="1/2" as="aside">
            {props.code}
          </StyledCodeRow>
        )}
      </Rows>
    </StyledMainContent>
  </StyledContainer>
);
