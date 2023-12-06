import React from 'react';
import "./App.css";
import AppBar from './compontents/AppBar/AppBar';
import AppControlsCounter from './compontents/AppControls/AppControlsCounter';
import AppControlsDelete from './compontents/AppControls/AppControlsDelete';
import AppControlsInputs from './compontents/AppControls/AppControlsInputs';

const App = () => {
  return (
    <>
      <AppBar/>
      <AppControlsCounter/>
      <AppControlsDelete/>
      <AppControlsInputs/>
    </>
  )
}

export default App;
