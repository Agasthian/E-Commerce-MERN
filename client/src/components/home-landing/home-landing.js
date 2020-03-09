import React from 'react';
import Fade from 'react-reveal/Fade';

import Layout from '../../components/layout/Layout';

import Button from '../button/button';
import LandingSvg from '../../svg/landing.svg';
import Planning from '../../svg/1 Planning.png';
import Budget from '../../svg/2 budget.png';
import AskOurExpert from '../../svg/3 asking.png';
import PlaceOrder from '../../svg/4 purchase.png';
import Deliverey from '../../svg/5 truck.png';

import {
  HomeLandingWrapper,
  ContentWrapper,
  Heading,
  SubHeading,
  TagLine,
  ProductContent,
  Catalog,
  ProductDescription,
  Svg,
  FlexWrapper,
  PlanningWrapper,
  PlanBlock,
  PlanBlock_text,
  Image
} from './home-landing.styles';

const HomeLanding = () => {
  return (
    <HomeLandingWrapper>
      <Layout>
        <FlexWrapper>
          <ContentWrapper>
            <div>
              <Fade left duration={2000} delay={500}>
                <TagLine>CivilBox.in</TagLine>
                <Heading>Trusted Market Place</Heading>
                <SubHeading>for all construction materials</SubHeading>
                <ProductContent>
                  <Catalog>Concrete</Catalog>
                  <ProductDescription>
                    <p style={{ margin: '0 0 30px 0' }}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam tempore vero ducimus similique cum eaque ipsum,
                      iste quibusdam? Soluta quis vitae molestias vero
                      temporibus blanditiis eaque voluptatibus voluptas, saepe
                      facilis.
                    </p>
                    <Button title='Shop Now' />
                  </ProductDescription>
                </ProductContent>
              </Fade>
            </div>
            <Fade right duration={2000} delay={500}>
              <Svg src={`${LandingSvg}`} alt='Not found' />
            </Fade>
          </ContentWrapper>
          <Fade bottom duration={2000} delay={1000}>
            <PlanningWrapper>
              <PlanBlock className='plan-text'>
                <PlanBlock_text>
                  Your Guide to buy Construction Materials
                </PlanBlock_text>
              </PlanBlock>
              <PlanBlock>
                <Image src={`${Planning}`} alt='Civil Box Planning' />
                <PlanBlock_text>Planning</PlanBlock_text>
              </PlanBlock>
              <PlanBlock>
                <Image src={`${Budget}`} alt='Civil Box Budget' />
                <PlanBlock_text>Budget</PlanBlock_text>
              </PlanBlock>
              <PlanBlock>
                <Image src={`${AskOurExpert}`} alt='Civil Box ask our expert' />
                <PlanBlock_text>Ask Our Expert</PlanBlock_text>
              </PlanBlock>
              <PlanBlock>
                <Image src={`${PlaceOrder}`} alt='Civil Box place order' />
                <PlanBlock_text>Place Order</PlanBlock_text>
              </PlanBlock>
              <PlanBlock>
                <Image src={`${Deliverey}`} alt='Civil Box Online delivery' />
                <PlanBlock_text>Materials Delivered</PlanBlock_text>
              </PlanBlock>
            </PlanningWrapper>
          </Fade>
        </FlexWrapper>
      </Layout>
    </HomeLandingWrapper>
  );
};

export default HomeLanding;
