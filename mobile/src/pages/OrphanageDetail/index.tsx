import React from 'react';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import darkMap from '../../themes/darkMap.json';

import mapMarker from '../../assets/images/map-marker.png';

import {
  Container,
  ImagesContainer,
  Img,
  PagingEnabled,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  Map,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItemBlue,
  ScheduleTextBlue,
  ScheduleItemGreen,
  ScheduleTextGreen,
  ScheduleItemRed,
  ScheduleTextRed,
  ContactButton,
  ContactButtonText,
} from './styles';

const OrphanageDetail: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <ImagesContainer>
        <PagingEnabled horizontal pagingEnabled>
          <Img
            resizeMode="cover"
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Img
            resizeMode="cover"
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Img
            resizeMode="cover"
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
        </PagingEnabled>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Orfanato Esperança</Title>
        <Description>
          Presta assistência a crianças de 06 a 15 anos que se encontre em
          situação de risco e/ou vulnerabilidade social.
        </Description>

        <MapContainer>
          <Map
            customMapStyle={theme.isLighten ? [] : darkMap}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: -22.767972,
              longitude: -43.3349147,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarker}
              coordinate={{ latitude: -22.767972, longitude: -43.3349147 }}
            />
          </Map>

          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>
          Venha como se sentir a vontade e traga muito amor e paciência para
          dar.
        </Description>

        <ScheduleContainer>
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2ab5d1" />
            <ScheduleTextBlue>Segunda à Sexta 8h às 18h</ScheduleTextBlue>
          </ScheduleItemBlue>

          <ScheduleItemGreen>
            <Feather name="info" size={40} color="#39cc83" />
            <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
          </ScheduleItemGreen>
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetail;
