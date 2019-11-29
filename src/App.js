// Imports
import React from 'react';
// App Imports
import './App.css';
import Header from './components/common/Header';
import WeatherHome from './components/weather/WeatherHome';

// Applications works in chrome browser and not in IE, please refer package json for supported browsers
function App() {
  return (
    <div className="App">
      <Header />
      <WeatherHome />
    </div>
  );
}

export default App;
