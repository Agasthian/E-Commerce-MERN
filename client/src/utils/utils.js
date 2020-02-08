import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Link
export const StyledLink = styled(Link)`
  font-family: Montserrat;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 3px;
  color: var(--primary-blue);
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-top: 3rem;
  padding-bottom: 3px;
  border-bottom: 2px solid var(--primary-blue);
`;

export const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-blue);
  margin-bottom: 1rem;
`;

export const Heading = styled.h4`
  font-family: 'Neuton', serif;
  font-size: 3.2rem;
  color: var(--primary-blue);
  font-weight: 400;
  margin: 0px 0px 2rem 0px;
`;
// used by our Works
export const SecondaryHeading = styled.h3`
  font-family: inherit;
  font-weight: 700;
  font-size: 4rem;
  color: var(--primary-blue);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
// Footer
export const SecondaryHeadingLight = styled.h5`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-lighter);
`;
// Layout
export const Container = styled.div`
  max-width: 124rem;
  z-index: 2;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 8rem 0rem 0rem 0rem;
  color: var(--text);
  display: flex;
  width: 100%;
  flex-direction: column;
  transition: color 0.2s ease-out;
`;
//Banner
export const BannerHeading = styled.h1`
  text-transform: uppercase;
  color: var(--primary-lighter);
  font-size: 4.5rem;
`;
// Page Heading
export const PageHeading = styled.h2`
  text-transform: uppercase;
  color: var(--primary-blue);
  font-size: 3rem;
  margin-bottom: 1rem;
`;
//Gallery
export const GalleryHeading = styled.h3`
  text-transform: uppercase;
  color: var(--primary-blue);
  font-size: 2.5rem;
  margin-top: 2rem;
  font-weight: 100;
`;
