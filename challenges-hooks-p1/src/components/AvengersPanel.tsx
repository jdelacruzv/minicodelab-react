import '../App.css';
import { useState } from "react";

const myAvenger = {
  ironMan: 'https://www.sideshow.com/storage/product-images/500846U/the-invincible-iron-man_marvel_silo_lg.png',
  spiderMan: 'https://pbs.twimg.com/media/EYbVjfXXgAEe2yG?format=jpg&name=4096x4096',
  blackPanther: 'https://www.lafuerzararuna.com/files/products/avengers-37-alex-ross-black-panther-timeless-var-7eb333d8eb012e32.jpg?width=600&quality=100'
};

type Props = {
  name: string;
  url: string;
}

export const ButtonComponent = ({ name, url }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <h6>{url}</h6>
      <button onClick={() => setVisible(!visible)}>{name}</button>
      <br />
      {visible && <img src={url} alt={name} />}
    </>
  );
};

export const AvengersPanel = () => {
  return (
    <>
      <h2>Reto 02 - Select Avenger</h2>
      <ButtonComponent name='ironMan' url={myAvenger.ironMan}/>
      <ButtonComponent name='spiderMan' url={myAvenger.spiderMan}/>
      <ButtonComponent name='blackPanther' url={myAvenger.blackPanther}/>
    </>
  );
};

/*
{ myAvengerKeys.map((key) => 
    <button key={key} onClick={() => setVisible(!visible)}>{key}</button>
  )
}
*/
