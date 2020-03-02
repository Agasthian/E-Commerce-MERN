import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Breadcrumb = styled.div`
  background-color: #f5f5f5;
  height: 10rem;
  width: 100%;
  margin-top: 12rem;
`;
export const BreadcrumbWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem;
  justify-content: space-between;
`;

export const BreadcrumbHeading = styled.h2``;
export const BreadcrumbItemWrapper = styled.div``;
export const BreadcrumbItem = styled(Link)`
  text-decoration: none;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 300;
  margin-right: 1rem;
  line-height: 1;
  color: var(--color-primary-light);
  text-transform: uppercase;
  padding: 0.5rem 0rem;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }
`;
