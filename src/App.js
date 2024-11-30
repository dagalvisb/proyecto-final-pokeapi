import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import './fuentes.css';
import PokemonList from './components/PokemonList';
import image from './img/dual_monitor_pokemon_wallpaper_by_trashpandasforever_dctpuw1-fullview.jpg';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <Layout/>
      <header>
      <img src={image} className="img-fluid rounded-start" alt='banner'/>
      </header>
      <body className='fondo'>
        <div className='App container'>
          <PokemonList/>
        </div>
      </body>
    </>
  );
}

export default App;
