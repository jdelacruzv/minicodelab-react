import { useState, useEffect } from 'react';

export const ChangeName: React.FC = () => {
  const [name, setName] = useState<string>('MiniCodeLab');

  // Aquí cambiaremos el nombre en el render inicial, ¿como lo harás?
  useEffect(() => {
    // console.log('Nombre del estado inicial: MiniCodeLab')
    setName('Jose De La Cruz'); 
  }, []);

  

  return (
    <>
      <h2>El nombre es: {name}</h2>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
