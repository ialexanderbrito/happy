import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mapMarker from '../../assets/images/map-marker.svg'

export const PageMapContainer  = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header``;

export const MapMarkerImg = styled.img.attrs({
  src: mapMarker,
  alt: "Happy"
})``;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const Description = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`;

export const City = styled.strong`
  font-weight: 800;
`;

export const State = styled.span``;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #17d6eb;
  }
`;