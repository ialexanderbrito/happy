import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

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

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  function handleNavigateToOrphanageDetail(id: number) {
    navigate('OrphanageDetail', { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigate('SelectMapPosition');
  }
  return (
    <Wrapper>
      <Map
        customMapStyle={theme.isLighten ? [] : darkMap}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.767972,
          longitude: -43.3349147,
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
