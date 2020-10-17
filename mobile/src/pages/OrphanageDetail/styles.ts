import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const Img = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 240px;
`;

export const PagingEnabled = styled.ScrollView``;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;

export const Description = styled.Text`
  font-family: 'Nunito_600SemiBold';
  line-height: 24px;
  margin-top: 16px;
  color: ${({ theme }) => theme.text};
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: ${({ theme }) => theme.borderColor};
  margin-top: 40px;
  background-color: #e6f7fb;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 150px;
`;

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: ${({ theme }) => theme.secondary};
`;

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background-color: ${({ theme }) => theme.borderColor};
  margin: 40px 0px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleItemBlue = styled.View`
  width: 48%;
  padding: 20px;

  background: ${({ theme }) => (theme.isLighten ? '#e6f7fb' : '#104b57')};

  border: 1px;
  border-color: ${({ theme }) => (theme.isLighten ? '#b3dae2' : '#104b57')};
  border-radius: 20px;
`;

export const ScheduleTextBlue = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #5c8599;
`;

export const ScheduleItemGreen = styled.View`
  width: 48%;
  padding: 20px;

  background: ${({ theme }) => (theme.isLighten ? '#EDFFF6' : '#0b3b23')};

  border: 1px;
  border-color: ${({ theme }) => (theme.isLighten ? '#A1E9C5' : '#0b3b23')};
  border-radius: 20px;
`;

export const ScheduleTextGreen = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #37c77f;
`;

export const ScheduleItemRed = styled.View`
  width: 48%;
  padding: 20px;

  background: ${({ theme }) => (theme.isLighten ? '#FEF6F9' : '#5e132e')};

  border: 1px;
  border-color: ${({ theme }) => (theme.isLighten ? '#FFBCD4' : '#5e132e')};
  border-radius: 20px;
`;

export const ScheduleTextRed = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #ff669d;
`;

export const ContactButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
