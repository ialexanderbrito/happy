import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PROVIDER_GOOGLE, Marker, MapEvent } from 'react-native-maps';
import { useTheme } from 'styled-components';

import darkMap from '../../themes/darkMap.json';

import mapMarker from '../../assets/images/map-marker.png';

import { Container, Map, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleNextStep() {
    navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <Container>
      <Map
        customMapStyle={theme.isLighten ? [] : darkMap}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.767972,
          longitude: -43.3349147,
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

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
