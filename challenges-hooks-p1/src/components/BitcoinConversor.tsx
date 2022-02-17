import '../App.css';
import { useState } from 'react';

type CoinExchange = {
  euro: number;
  bitcoin: number;
};

export const BitcoinConversor: React.FC = () => {
  const [coin, setCoin] = useState<CoinExchange>({
    euro: 1,
    bitcoin: 0.01
  });
  
  return (
    <>
      <h2>Reto 01 - Valor del Bitcoin</h2>
      <h3>Convierte Euros a Bitcoins</h3>
      <input 
        type="number"
        value={coin.euro}
        min="1"
        onChange={(e) => {
          setCoin({
            ...coin,
            euro: +e.target.value,
          })
        }}
      />
      <h3>{coin.euro} EUR = {(coin.bitcoin * coin.euro).toFixed(2)} BTC</h3>
    </>
  );
};
