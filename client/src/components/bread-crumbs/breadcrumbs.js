import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../../utils/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbWrapper,
  BreadcrumbHeading,
  BreadcrumbItemWrapper
} from './breadcrumb.styles';

const breadcrumbs = ({ url, name, currentPage }) => {
  return (
    <div>
      <Breadcrumb>
        <Container>
          <BreadcrumbWrapper>
            <BreadcrumbHeading>{name}</BreadcrumbHeading>
            <BreadcrumbItemWrapper>
              <BreadcrumbItem to='/'>
                <FontAwesomeIcon
                  icon='home'
                  size='1x'
                  style={{ marginRight: '5px' }}
                />
                Home >
              </BreadcrumbItem>
              <BreadcrumbItem to='/shop'>Shop ></BreadcrumbItem>
              <BreadcrumbItem to={url}> {currentPage}</BreadcrumbItem>
            </BreadcrumbItemWrapper>
          </BreadcrumbWrapper>
        </Container>
      </Breadcrumb>
    </div>
  );
};

export default breadcrumbs;
