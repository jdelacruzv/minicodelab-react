import { useState, useEffect } from 'react';

type RickAndMorty = {
  id: number;
  name: string;
  image: string;
  status: string;
};

export const RickAndMortyFilter: React.FC = () => {
  const [characterList, setCharacterList] = useState<RickAndMorty[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    // función autoinvocada
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then((res) => res.json());
      setCharacterList(data.results);
    })();
  }, []);
  
  const filteredCharacter = characterList.filter((character) => 
    character.name.toLowerCase() === filter.trim().toLowerCase());

  useEffect(() => {    
    filteredCharacter.map((character) => setFilter(character.name));
  }, [filter]);

  return (
    <>
			<h2>Reto 05 - Filtrado de elementos</h2>
      <h3>'Rick And Morty'</h3>
			<div className='character-container'>
				<ul className="character-list">
          {characterList.map((character) => (
            <li className="character-list" key={character.id}>
							{character.name}
						</li>
					))}
				</ul>				
				<div className="character-input">
					<input
						type="text"
						value={filter}
						placeholder="Filtrar por nombre"
						onChange={(e) => setFilter(e.target.value)}
					/>
					<h3>{filter}</h3>
					{filteredCharacter.map((character) => (
            <>
              <img key={character.id} src={character.image} alt={character.name} />
              <p>{character.status}</p>
            </>
					))}
				</div>
			</div>
		</>
  );
}