import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding-horizontal: 16px;
  background-color: ${({ theme }) => theme.overlay};
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutText = styled.Text`
  color: ${({ theme }) => theme.primaryLight};
  font-size: 14px;
  font-family: 'Nunito_700Bold';
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background-color: ${({ theme }) => theme.formBackground};
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  elevation: 3;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-family: 'Nunito_700Bold';
`;

export const CreateOrphanageButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.primaryLight};
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
