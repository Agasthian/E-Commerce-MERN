import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useHistory } from 'react-router-dom';

import NavbarLogo from '../../ui/navbarLogo';
import { signout, isAuthenticated } from '../../../auth';
import CartIcon from '../../cart-icon/cart-icon';
import CartDropdown from '../../cart-dropdow/cart-dropdown';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'space-between')};
  flex: 1;
`;

const StyledLink = styled(Link)`
    font-family: Open Sans;
    text-decoration: none;
    font-weight:400;
    color: var(--text);
    padding: 1rem 2rem;
    font-size: 1.2rem;
    transition: all 0.2s ease-out;
    letter-spacing:1px;

    &:hover {
        color: var(--text);
        text-decoration:none;
      }
}
`;
const MenuEnd = styled.div`
  display: flex;
`;
const MenuStart = styled.div`
  display: flex;
`;
const NavItems = ({ mobile, clicked, hidden }) => {
  let history = useHistory();

  return (
    <>
      <StyledNav mobile={mobile}>
        <MenuStart>
          <StyledLink>
            <FontAwesomeIcon
              icon='phone-alt'
              size='1x'
              style={{ marginRight: '5px' }}
            />
            (7840)559-7449
          </StyledLink>
          <StyledLink>
            <FontAwesomeIcon
              icon='map-marker-alt'
              size='1x'
              style={{ marginRight: '5px' }}
            />
            Store Location
          </StyledLink>
        </MenuStart>
        <NavbarLogo />
        <MenuEnd>
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <StyledLink onClick={clicked} to='/user/dashboard'>
              <FontAwesomeIcon icon='user-circle' size='2x' />
            </StyledLink>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <StyledLink onClick={clicked} to='/admin/dashboard'>
              <FontAwesomeIcon icon='user-circle' size='2x' />
            </StyledLink>
          )}

          <CartIcon />
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
        </MenuEnd>
      </StyledNav>
      {hidden ? null : <CartDropdown />}
    </>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(NavItems);
