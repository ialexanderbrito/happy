import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.headerColor};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.borderColor};
  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export const Button = styled(BorderlessButton)``;
