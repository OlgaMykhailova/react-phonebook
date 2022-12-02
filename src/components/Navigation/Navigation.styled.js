import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled(Flex)`
  align-items: center;
`;
export const Link = styled(NavLink)`
  margin-left: 20px;
  font-size: 36px;
  color: black;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &.active {
    color: white;
  }
  :hover {
    color: white;
  }
`;
