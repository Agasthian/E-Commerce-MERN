import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { animated, useTrail, config } from 'react-spring';

import NavItemSingle from './navItemSingle';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'flex-end')};
  flex: 1;
`;
const StyledLink = styled(Link)`
    font-family: inherit;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--text);
    padding: 1rem 2rem;
    font-size: 1.3rem;
    transition: all 0.2s ease-out;
    letter-spacing:1px;

    &:hover {
        color: var(--primary);
      }
}
`;

const LINKS = ['SignIn', 'SignOut'];

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
