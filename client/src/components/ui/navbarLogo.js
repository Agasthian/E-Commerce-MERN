import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const NavbarLogo = () => {
  return (
    <div>
      <StyledLink to='/'>Logo</StyledLink>
    </div>
  );
};

export default NavbarLogo;
