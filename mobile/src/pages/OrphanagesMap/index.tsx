import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as Location from 'expo-location';

import darkMap from '../../themes/darkMap.json';

import mapMarker from '../../assets/images/map-marker.png';

import api from '../../services/api';

import {
  Wrapper,
  Map,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useFocusEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  });

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Ooooops...',
          'Precisamos de sua permissão para obter a localização'
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  function handleNavigateToOrphanageDetail(id: number) {
    navigate('OrphanageDetail', { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigate('SelectMapPosition');
  }
  return (
    <Wrapper>
      {initialPosition[0] !== 0 && (
        <Map
          customMapStyle={theme.isLighten ? [] : darkMap}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          {orphanages.map((orphanage) => {
            return (
              <Marker
                key={orphanage.id}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8,
                }}
                icon={mapMarker}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}
              >
                <Callout
                  tooltip
                  onPress={() => handleNavigateToOrphanageDetail(orphanage.id)}
                >
                  <CalloutContainer>
                    <CalloutText>{orphanage.name}</CalloutText>
                  </CalloutContainer>
                </Callout>
              </Marker>
            );
          })}
        </Map>
      )}

      <Footer>
        <FooterText>{orphanages.length} orfanatos encontrados.</FooterText>
        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanageButton>
      </Footer>
    </Wrapper>
  );
};

export default OrphanagesMap;
