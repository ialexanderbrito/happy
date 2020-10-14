import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { SidebarContainer } from '../styles/components/sidebar';

import mapMarkerImg from '../assets/images/map-marker.svg';

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <SidebarContainer>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </SidebarContainer>
  );
}
