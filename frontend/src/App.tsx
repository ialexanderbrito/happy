import React from 'react';

import { GlobalStyles } from './styles/global';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
