import React from 'react';
import styled from './styled';

const StyledList = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

export const Unordered: React.FC = props => (
  <StyledList>{props.children}</StyledList>
);

export const Item: React.FC = props => <li>{props.children}</li>;
