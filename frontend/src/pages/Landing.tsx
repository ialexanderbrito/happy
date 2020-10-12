import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  PageLandingContainer,
  ContentWrapper,
  Main,
  Title,
  Description,
  Location,
  City,
  State,
  EnterApp,
} from '../styles/pages/landing';

import logoImg from '../assets/images/logo.svg';

function Landing() {
  return (
    <PageLandingContainer>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <Main>
          <Title>Leve a felicidade para o mundo</Title>
          <Description>
            Visite orfanatos e mude o dia de muitas crianças.
          </Description>
        </Main>
        <Location>
          <City>Duque de Caxias</City>
          <State>Rio de Janeiro</State>
        </Location>

        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </ContentWrapper>
    </PageLandingContainer>
  );
}

export default Landing;
