import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';

const App = () => {

  const [coins, updateCoins] = useState([]);
  
  const fetchCoins = async () => {
    const data = await API.get('cryptoapi', '/coins');
    setLoading(false);
    updateCoins(data.coins);
  }

  const [loading, setLoading] = useState(true);
  
  useEffect(
    () => {
      fetchCoins();
    }
    , []
  );

  return (
    <div className="App">
      { loading && <h3>Loading coin data...</h3> }
      {
        !loading &&
        coins.map(x => (
          <div
            key={ x.symbol }
          >
            <h2>
              { x.name } - { x.symbol}
            </h2>
            <h5>
              ${ x.price_usd }
            </h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;
