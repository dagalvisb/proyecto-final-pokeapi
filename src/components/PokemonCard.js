import React, { useEffect, useState } from 'react';


const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  if (!pokemon) return <p>Cargando detalles del Pokémon...</p>;

  return (
    <>
    <div className="card text-bg-warning mb-3 container" width= "540">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={pokemon.sprites.front_default} className="img-fluid rounded-start" width="300" height="300" alt={pokemon.name}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title pokemon-font">{pokemon.name}</h2>
              <span className='ketchum-font'>
              Peso:
              <br></br>
              <h5><strong>{pokemon.weight}</strong></h5>
              </span>
              <span className='ketchum-font'>
              Altura:
              <br></br>
              <h5><strong>{pokemon.height}</strong></h5>
              </span>
            </div>
            </div>
        </div>
    </div> 
    </>
  );
};

export default PokemonCard;