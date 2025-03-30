import React, { useState } from 'react';
import Navigate from './Navigate';
// import Main from './components/Main'
import Footer from './Footer';
import DeviceList from './DeviceList';
import Main from './Main';
import "../../style/HomePage.css"
function HomePage() {
  const [buyCount, setBuyCount] = useState(0);
  return (
    <div className="devPage">
      {/* <Main /> */}
      <Navigate buyCount={buyCount}/>
      <Main setBuyCount={setBuyCount}/>
      <Footer />
    </div>

  );
}

export default HomePage;
