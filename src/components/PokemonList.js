import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); 
    const [loading, setLoading] = useState(false);
    const limit = 10; 

    
    const fetchPokemons = async (page) => {
        setLoading(true);
        const offset = (page - 1) * limit; 
        try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        setPokemons(data.results);
        } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemons(currentPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div>
        <h1 className='pokemon-font text-danger'>Lista de Pokémon</h1>
        {loading ? (
            <p>Cargando Pokémon...</p>
        ) : (
            <>
           <div className="card text-center container card text-bg-warning mb-3 border-success">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                {pokemons.map((pokemon) => (
                    <>
                    <li className="nav-item">
                    <h3 className="card-title btn ketchum-font" key={pokemon.name} onClick={() => setSelectedPokemon(pokemon.url)}>{pokemon.name}</h3>
                    </li>
                    </>
                ))}
               </ul>
            </div>
             {selectedPokemon && <PokemonCard url={selectedPokemon} />}
            </div> 
            <div className="pagination-controls">
                <button className="btn btn-danger me-2" onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <strong>Anterior</strong>
                </button>
                <span>Página {currentPage}</span>
                <button className="btn btn-danger ms-2" onClick={handleNextPage}>
                    <strong>Siguiente</strong>
                </button>
            </div>
            </>
        )}

       
        </div>
    );
};

export default PokemonList;