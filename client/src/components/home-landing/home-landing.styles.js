import styled from 'styled-components';

export const HomeLandingWrapper = styled.div`
  min-height: 100vh;
  background-color: #f7f8f3;
  color: #000;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ContentWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const TagLine = styled.p`
  font-family: 'Josefin Sans';
  font-weight: 300;
  font-size: 2.5rem;
`;
export const Heading = styled.h3`
  font-size: 4.5rem;
  font-weight: 700;
  justify-content: center;
  margin-top: 2rem;
`;
export const SubHeading = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
`;
export const ProductContent = styled.div`
  background-color: #fff;
  display: flex;
  width: 50rem;
  box-shadow: 0 4px 10px var(--shadow-color);
`;
export const Catalog = styled.p`

  font-size: 12px;
  letter-spacing: 0.1em;
  writing-mode: vertical-lr;
  margin: 20px auto;
  padding: 10px;
  display:flex;

  ::after {
    content: "";
    display: block;

    width: 1px;
    height: 90px;
    background-color: #25282a;
    margin: 8px auto;
`;

export const ProductDescription = styled.div`
  padding: 3rem;
`;

export const ImageWrapper = styled.div`
  background-color: orange;
  padding: 3rem;
  margin: 3rem;
  flex: 1 0 0;
`;
export const Svg = styled.img`
  max-width: 100%;
  height: 40vh;
  margin-bottom: 6rem;
`;

export const PlanningWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const PlanBlock = styled.div`
  padding: 3rem;
  margin: 1rem;
  background-color: #fff;
  flex: 1;
  text-align: center;
  box-shadow: 0 4px 10px var(--shadow-color);
`;
export const PlanBlock_text = styled.h4`
  font-weight: 600;
`;
export const Image = styled.img`
  max-width: 7rem;
  height: 7rem;
  margin-bottom: 1rem;
`;
