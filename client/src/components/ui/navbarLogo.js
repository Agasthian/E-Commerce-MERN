import React from 'react';

import LogoSvg from '../../svg/Logo4.jpg';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const LogoWrapper = styled.img`
  max-width: 100%;
`;

const NavbarLogo = () => {
  return (
    <LogoContainer to='/'>
      <LogoWrapper src={LogoSvg} />
    </LogoContainer>
  );
};

export default NavbarLogo;
