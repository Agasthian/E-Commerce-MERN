import React from 'react';
import styled from 'styled-components';

import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'space-between')};
  flex: 1;
  flex-wrap: wrap;
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const StyledLink = styled(Link)`
    font-family: inherit;
    text-decoration: none;
    color: var(--text);
    
    font-size: 1.4rem;
    font-weight:700;
    transition: all 0.2s ease-out;
    letter-spacing:1px;
    margin-right: 4rem;

    &:hover {
        color: var(--primary);
      }
}
`;

const SubMenu = ({ mobile, clicked, hidden }) => {
  let history = useHistory();

  return (
    <StyledNav mobile={mobile}>
      <StyledLinkWrapper>
        <StyledLink onClick={clicked} to='/'>
          Home
        </StyledLink>
        <StyledLink onClick={clicked} to='/shop'>
          Shop
        </StyledLink>
        <StyledLink onClick={clicked} to='/shop'>
          Collection
        </StyledLink>
        <StyledLink onClick={clicked} to='/shop'>
          Inspiration
        </StyledLink>
        <StyledLink onClick={clicked} to='/shop'>
          Custom Order
        </StyledLink>
        <StyledLink onClick={clicked} to='/shop'>
          Sale
        </StyledLink>
      </StyledLinkWrapper>
      <StyledLink>
        <FontAwesomeIcon
          icon='search'
          size='1x'
          style={{ marginRight: '5px' }}
        />
        Search
      </StyledLink>
    </StyledNav>
  );
};

export default SubMenu;
