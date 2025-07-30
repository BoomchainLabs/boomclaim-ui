import { useEffect, useState } from 'react';
import { SuiClient } from '@mysten/sui.js/client';

export default function Home() {
  const [chain, setChain] = useState('Connecting...');

  useEffect(() => {
    const client = new SuiClient({
      url: 'https://sui-mainnet.blockvision.org/v1/30bN9FFU3J2IpJgKXekVol8Cxni',
    });

    client.getChainIdentifier()
      .then((res) => setChain(`Connected to: ${res}`))
      .catch(() => setChain('❌ Connection failed'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>BoomClaim 🔐</h1>
      <p>{chain}</p>
    </div>
  );
}
