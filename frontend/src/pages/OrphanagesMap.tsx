import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import {
  PageMapContainer,
  Aside,
  Header,
  MapMarkerImg,
  Title,
  Description,
  Footer,
  City,
  State,
  CreateOrphanage,
} from '../styles/pages/orphanagesMap';

function OrphanagesMap() {
  return (
    <PageMapContainer>
      <Aside>
        <Header>
          <MapMarkerImg />

          <Title>Escolha um orfanato no mapa</Title>
          <Description>
            Visite orfanatos e mude o dia de muitas crianças.
          </Description>
        </Header>

        <Footer>
          <City>Duque de Caxias</City>
          <State>Rio de Janeiro</State>
        </Footer>
      </Aside>

      <Map
        center={[-22.7671747, -43.3347008]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CreateOrphanage to="">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </PageMapContainer>
  );
}

export default OrphanagesMap;
