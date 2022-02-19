import { useState, useEffect } from 'react';

export const ChangeName: React.FC = () => {
	const [name, setName] = useState<string>('MiniCodeLab');
  const [newName, setNewName] = useState<string>('');

  useEffect(() => {
		setName(newName.toUpperCase());
	}, [newName]);

  useEffect(() => {
    setName("Learning React");
  }, []);

  return (
		<>
			<h2>Reto 03 - Cambia el nombre en el Render</h2>
			<h3>El nombre es: {name}</h3>
			<input
				type="text"
				value={name}
				onChange={(e) => setNewName(e.target.value)}
			/>
		</>
	);
};

