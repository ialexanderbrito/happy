import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/images/landing.svg'

export const PageLandingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${backgroundImage}) no-repeat 80% center;
  background-size: contain;
`;

export const Main = styled.main`
  max-width: 350px;
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const Description = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const City = styled.strong`
  font-weight: 800;
`;

export const State = styled.span`

`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover{
    background: #96feff;
  }
`;