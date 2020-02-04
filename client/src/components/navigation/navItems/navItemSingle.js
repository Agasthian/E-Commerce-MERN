import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const NavItemSingle = ({ link, clicked }) => {
  return (
    <>
      <StyledLink
        onClick={clicked}
        to={`${link
          .split(' ')
          .join('-')
          .toLowerCase()}`}
      >
        {link}
      </StyledLink>
    </>
  );
};

export default NavItemSingle;
