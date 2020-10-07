import React, { useState, useEffect }from 'react';
import { API } from 'aws-amplify';

const GitHubBornOn = () => {

    const [bornOn, setBornOn] = useState({ username: 'unknown', date: 'unknown' });

    const fetchBornOn = async () => {
      const data = await API.get('cryptoapi', '/born');
      setBornOn({
        username: data.borninfo.login
        , date: data.borninfo.created_at
      });
    }
  
    useEffect(
      () => {
        fetchBornOn();
      }
      , []
    );

    return (
        <h3>
            { bornOn.username } - { bornOn.date }
        </h3>
    );
}

export default GitHubBornOn;