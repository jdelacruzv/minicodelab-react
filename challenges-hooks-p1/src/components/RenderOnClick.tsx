import React from 'react'
import { useState } from 'react';

export const RenderOnClick: React.FC = () => {
  const [initial, setInitial] = useState<string>('Estado inicial');
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>Reto 04 - Renderizado en el click</h2>
      <h3>{initial} : {count} {count > 1 ? 'veces' : 'vez'}</h3>
      <button onClick={() => {
          setInitial('Estado cambiado')
          setCount(count + 1)
        }}
      >Cambiar Estado</button>
    </>
  )
}
