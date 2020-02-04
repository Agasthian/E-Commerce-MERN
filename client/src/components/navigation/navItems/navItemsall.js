import React from 'react';
import styled from 'styled-components';
import { animated, useTrail, config } from 'react-spring';

import NavItemSingle from './navItemSingle';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'flex-end')};
  flex: 1;
`;

const LINKS = ['Home', 'SignIn', 'SignUp'];

const NavItems = ({ mobile, clicked }) => {
  //Animation
  const navItemstrail = useTrail(LINKS.length, {
    config: config.wobbly,
    opacity: 1,
    delay: 300,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
      display: 'flex',
      cursor: 'pointer'
    }
  });

  return (
    <StyledNav mobile={mobile}>
      {navItemstrail.map((propStyles, index) => (
        <animated.div key={LINKS[index]} style={propStyles}>
          {/* <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/signin'>Sign In</StyledLink>
          <StyledLink to='/signout'>Sign Out</StyledLink> */}
          <NavItemSingle
            key={LINKS[index]}
            link={LINKS[index]}
            clicked={clicked}
          />
        </animated.div>
      ))}
    </StyledNav>
  );
};

export default NavItems;
