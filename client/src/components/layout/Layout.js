import React from 'react';
import { Wrapper, Container } from '../../utils/utils';

const Layout = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Layout;
