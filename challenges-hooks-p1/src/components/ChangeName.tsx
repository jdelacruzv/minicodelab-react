import { useState, useEffect } from "react";

export const ChangeName: React.FC = () => {
const [name, setName] = useState<string>("MiniCodeLab");
	const [isInputUsed, setIsInputUsed] = useState<boolean>(false);

	useEffect(() => {
		setName("Learning React");
	}, []);

	useEffect(() => {
		if (isInputUsed) {
			setName(name.toUpperCase());
		}
	}, [name, isInputUsed]);

	return (
		<>
			<h2>Reto 03 - Cambia el nombre en el Render</h2>
			<h3>El nombre es: {name}</h3>
			<input
				type="text"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
					if (!isInputUsed) {
						setIsInputUsed(true);
					}
				}}
			/>
		</>
	);
};