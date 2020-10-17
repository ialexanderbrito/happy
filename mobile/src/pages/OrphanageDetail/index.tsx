import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useRoute } from '@react-navigation/native';

import darkMap from '../../themes/darkMap.json';

import mapMarker from '../../assets/images/map-marker.png';

import api from '../../services/api';

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

interface OrphanageDetailRouteParams {
  id: number;
}

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  whatsapp: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

const OrphanageDetail: React.FC = () => {
  const theme = useTheme();
  const route = useRoute();

  const [orphanage, setOrphanage] = useState<Orphanage>();

  const params = route.params as OrphanageDetailRouteParams;

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <Container />;
  }

  function handleOpenGoogleMapsRoute() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`
    );
  }

  function handleOpenWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=55${orphanage.whatsapp}`);
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <ImagesContainer>
        <PagingEnabled horizontal pagingEnabled>
          {orphanage.images.map((image) => {
            return (
              <Img
                key={image.id}
                resizeMode="cover"
                source={{ uri: image.url }}
              />
            );
          })}
        </PagingEnabled>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <Map
            customMapStyle={theme.isLighten ? [] : darkMap}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
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
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </Map>

          <RoutesContainer onPress={handleOpenGoogleMapsRoute}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2ab5d1" />
            <ScheduleTextBlue>
              Segunda à Sexta {orphanage.opening_hours}
            </ScheduleTextBlue>
          </ScheduleItemBlue>

          {orphanage.open_on_weekends ? (
            <ScheduleItemGreen>
              <Feather name="info" size={40} color="#39cc83" />
              <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
            </ScheduleItemGreen>
          ) : (
            <ScheduleItemRed>
              <Feather name="info" size={40} color="#ff669d" />
              <ScheduleTextRed>Não atendemos fim de semana</ScheduleTextRed>
            </ScheduleItemRed>
          )}
        </ScheduleContainer>

        <ContactButton onPress={handleOpenWhatsApp}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetail;
