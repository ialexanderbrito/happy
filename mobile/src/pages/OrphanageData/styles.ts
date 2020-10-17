import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.textColor};
  font-size: 24px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color: #d3e2e6;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.textColor};
  font-family: 'Nunito_600SemiBold';
  margin-bottom: 8px;
`;

export const Comment = styled.Text`
  font-size: 11px;
  color: #8fa7b3;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textColor};
  border-width: 1.4px;
  border-color: ${({ theme }) => theme.headerBorder};
  border-radius: 20px;
  height: 56px;
  padding: 18px 24px;
  margin-bottom: 16px;
`;

export const ImagesInput = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.overlay};
  border-style: dashed;
  border-color: #96d2f0;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const UploadedImagesContainer = styled.View`
  flex-direction: row;
`;

export const UploadedImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  margin-bottom: 32px;
  margin-right: 8px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const SwitchChange = styled.Switch``;

export const NextButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
`;

export const NextButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;
