import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  background-color: var(--color-primary-lighter);

  &:hover {
    transform: scale(1.03);
    text-decoration: none;

    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    background-color: var(--color-primary-lighter);
    z-index: -99;
    box-shadow: 0rem 2rem 5rem var(--shadow-color-dark);
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 1.5rem 1.5rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem 4rem;
  color: var(--color-primary-light);
  background-color: #fff;
  box-shadow: 0 4px 10px var(--shadow-color);
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${CardWrapper}:hover & {
    color: #fff;
    background-color: var(--color-primary-dark);
    font-weight: 500;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-primary-light);
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;
export const Price = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--color-primary);

  ${CardWrapper}:hover & {
    color: var(--color-primary-dark);
    font-weight: 700;
  }
`;
