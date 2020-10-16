import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
  Label,
  Input,
  ImagesInput,
  SwitchContainer,
  SwitchChange,
  NextButton,
  NextButtonText,
} from './styles';

const OrphanageData: React.FC = () => {
  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input />

      <Label>Sobre</Label>
      <Input style={{ height: 110 }} multiline />

      <Label>WhatsApp</Label>
      <Input />

      <Label>Fotos</Label>

      <ImagesInput onPress={() => {}}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input style={{ height: 110 }} multiline />

      <Label>Horário de visitas</Label>
      <Input />

      <SwitchContainer>
        <Label>Atende final de semana</Label>
        <SwitchChange
          thumbColor="#FFF"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
        />
      </SwitchContainer>

      <NextButton onPress={() => {}}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default OrphanageData;
