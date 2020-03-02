import React from 'react';

import {
  HomeLandingWrapper,
  ContentWrapper,
  Heading,
  SubHeading
} from './home-landing.styles';
import { Container, Wrapper } from '../../utils/utils';

const HomeLanding = () => {
  return (
    <HomeLandingWrapper>
      <Wrapper>
        <Container>
          <ContentWrapper>
            <Heading>Trusted Market Place</Heading>
            <SubHeading>for all construction materials</SubHeading>
          </ContentWrapper>
        </Container>
      </Wrapper>
    </HomeLandingWrapper>
  );
};

export default HomeLanding;
