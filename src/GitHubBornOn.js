import React, { useState, useEffect } from 'react';

const GitHubBornOn = () => {

    const [bornOnInfo, setBornOnInfo] = useState({ username: 'unknown', date: 'unknown' });

    // Create an async function to call our /born API endpoint.
    const fetchBornOnInfo = async () => {}
    
    useEffect(
        () => {
            // Call async function created above to load data and set it in state. 
            setBornOnInfo({ username: 'foo', date: 'bar' });
        }
        , []
    );

    return(
        <h1>
            { bornOnInfo.username } - { bornOnInfo.date }
        </h1>
    );
}

export default GitHubBornOn;