import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 1.2rem 3rem;
  line-height: 1;
  font-weight: 500;
  font-size: 1.3rem;
  width: auto;
  flex-grow: 0;
  color: ${props => (props.solid ? 'var(--text-color)' : '#F7F8F3')};
  border: ${props => (props.solid ? '1px solid transparent' : '#FF6F5E')};
  background-color: ${props =>
    props.solid ? 'var(--color-primary-dark)' : ' #FF6F5E'};

  box-shadow: ${props =>
    props.solid ? '0 1rem 5rem var(--shadow-color)' : 'none'};
  transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateY(-3px);
    background-color: ${props =>
      props.solid ? 'transparent' : 'var(--color-primary-dark)'};
    color: ${props =>
      props.solid ? 'var(--color-primary-dark)' : 'var(--text-color)'};
    border: ${props =>
      props.solid
        ? '1px solid var(--color-primary-dark)'
        : '1px solid transparent'};
    box-shadow: ${props =>
      props.solid ? 'none' : '0 1rem 5rem var(--shadow-color)'};
    transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media ${props => props.theme.mediaQueries.large} {
    padding: 1.2rem 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    padding: 1.3rem 1.6rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 1rem 1.3rem;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const Button = ({ title, solid, icon, left, onClick, color }) => {
  return (
    <StyledButton left={left ? 1 : 0} solid={solid ? 1 : 0} onClick={onClick}>
      <FontAwesomeIcon
        icon={icon}
        size='1x'
        style={left ? { marginRight: '10px' } : { marginLeft: '10px' }}
      />
      {title}
    </StyledButton>
  );
};

export default Button;
