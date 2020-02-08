import React from 'react';
import styled from 'styled-components';
import { animated, useTrail, config } from 'react-spring';
import { Link, useHistory } from 'react-router-dom';

import { signout, isAuthenticated } from '../../../auth';

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
const LINKS = ['Home', 'SignIn'];

const NavItems = ({ mobile, clicked }) => {
  let history = useHistory();
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
      {/* {navItemstrail.map((propStyles, index) => (
        <animated.div key={LINKS[index]} style={propStyles}>
          <NavItemSingle
            key={LINKS[index]}
            link={LINKS[index]}
            clicked={clicked}
          />
        </animated.div>
      ))} */}

      <StyledLink onClick={clicked} to='/'>
        Home
      </StyledLink>
      {!isAuthenticated() && (
        <StyledLink onClick={clicked} to='/signin'>
          Sign In
        </StyledLink>
      )}
      {isAuthenticated() && (
        <StyledLink
          onClick={() =>
            signout(() => {
              history.push('/');
            })
          }
          to='/'
        >
          Signout
        </StyledLink>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <StyledLink onClick={clicked} to='/user/dashboard'>
          Dashboard
        </StyledLink>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <StyledLink onClick={clicked} to='/admin/dashboard'>
          Dashboard
        </StyledLink>
      )}
    </StyledNav>
  );
};

export default NavItems;
