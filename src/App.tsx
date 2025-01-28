import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigate from './components/Navigate';
import Main from './components/Main'
import Footer from './components/Footer';
import DeviceList from './components/DeviceList';
function App() {
  return (
    <div>
      <Navigate />
      <Main />
      <div>
      <DeviceList />

      </div>
      <Footer />
    </div>

  );
}

export default App;
