import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.textColor};
  font-size: 32px;
`;

export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding-horizontal: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutText = styled.Text`
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  font-family: 'Nunito_700Bold';
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background-color: ${({ theme }) => theme.primary};
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  elevation: 3;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
  font-family: 'Nunito_700Bold';
`;

export const CreateOrphanageButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
