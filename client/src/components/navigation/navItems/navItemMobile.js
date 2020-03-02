import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Link, useHistory } from 'react-router-dom';

import { signout, isAuthenticated } from '../../../auth';
import CartIcon from '../../cart-icon/cart-icon';
import CartDropdown from '../../cart-dropdow/cart-dropdown';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'flex-end')};
  flex: 1;
`;

const StyledLink = styled(Link)`
    font-family: Open Sans;
    text-decoration: none;
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

const NavItems = ({ mobile, clicked, hidden }) => {
  let history = useHistory();

  return (
    <>
      <StyledNav mobile={mobile}>
        <StyledLink onClick={clicked} to='/'>
          Home
        </StyledLink>
        <StyledLink onClick={clicked} to='/shop'>
          Shop
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

        <CartIcon />
      </StyledNav>
      {hidden ? null : <CartDropdown />}
    </>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(NavItems);
