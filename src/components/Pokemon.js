import React, { useState } from 'react';
import PokemonCard from './PokemonCard';


const Pokemon = (name, url, id) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    return (
        <>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title btn btn-primary" key={id} onClick={() => setSelectedPokemon(url)}>{name}</h5>
                      <p></p>
                    </div>
                  </div>
                </div>
            </div>
            {selectedPokemon && <PokemonCard url={selectedPokemon} />}
        </>
    )
}
export default Pokemon;