import React from 'react';
import { FiPlus } from 'react-icons/fi';

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

      <div></div>

      <CreateOrphanage to="">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanage>
    </PageMapContainer>
  );
}

export default OrphanagesMap;
