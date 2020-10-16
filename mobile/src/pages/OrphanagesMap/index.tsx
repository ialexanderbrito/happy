import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import darkMap from '../../themes/darkMap.json';

import mapMarker from '../../assets/images/map-marker.png';

import {
  Wrapper,
  Map,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';

const OrphanagesMap: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  function handleNavigateToOrphanageDetail() {
    navigate('OrphanageDetail');
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
        <Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          icon={mapMarker}
          coordinate={{ latitude: -22.767972, longitude: -43.3349147 }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetail}>
            <CalloutContainer>
              <CalloutText>Lar das crianças</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </Map>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>
        <CreateOrphanageButton onPress={() => {}}>
          <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanageButton>
      </Footer>
    </Wrapper>
  );
};

export default OrphanagesMap;
