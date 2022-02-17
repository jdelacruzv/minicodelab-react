import { useState, useEffect } from 'react';

export const ChangeName: React.FC = () => {
  const [name, setName] = useState<string>('MiniCodeLab');

  useEffect(() => {
    // console.log(`Nombre inical: ${name}`);
    setName('Learning React'); 
  }, []);

  useEffect(() => {
    // setName(name.toUpperCase());
  }, []);

  return (
    <>
      <h2>Reto 03 - Cambia el nombre en el Render</h2>
      <h3>El nombre es: {name}</h3>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
