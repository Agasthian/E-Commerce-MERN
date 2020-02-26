import React from 'react';
import styled from 'styled-components';
import { API } from '../../config';

const CardImg = styled.img`
  width: 100%;
  object-fit: ${props => (props.error ? 'contain' : 'cover')};
  border-radius: 0.8rem;
  padding: ${props => (props.error ? '2rem' : '')};
  box-shadow: 0rem 2rem 5rem var(--shadow-color);
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 28rem;
  }
`;

const DisplayImage = ({ item, url }) => {
  return (
    <>
      <CardImg
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className='mb-3'
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </>
  );
};

export default DisplayImage;
