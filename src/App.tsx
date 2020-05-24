import React from 'react';
import { Typography } from '@material-ui/core';
import { MaterialSlider } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant="h1">
        Material Slider
      </Typography>
      <main>
        <MaterialSlider/>
      </main>
    </div>
  );
}

export default App;
