import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PROVIDER_GOOGLE, Marker, MapEvent } from 'react-native-maps';
import { useTheme } from 'styled-components';
import * as Location from 'expo-location';

import darkMap from '../../themes/darkMap.json';

import mapMarker from '../../assets/images/map-marker.png';

import { Container, Map, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

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

  function handleNextStep() {
    navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <Container>
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
          onPress={handleSelectMapPosition}
        >
          {position.latitude !== 0 && (
            <Marker
              icon={mapMarker}
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
            />
          )}
        </Map>
      )}

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
