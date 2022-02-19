import './App.css';
import { BitcoinConversor } from './components/BitcoinConversor';
import { AvengersPanel } from './components/AvengersPanel';
import { ChangeName } from './components/ChangeName';
import { RenderOnClick } from './components/RenderOnClick';
import { RickAndMortyFilter } from './components/RickAndMortyFilter';

function App() {
  return (
    <div className="app">
      {<BitcoinConversor/>}
      <hr />
      {<AvengersPanel />}
      <hr />
      {<ChangeName />}
      <hr />
      {<RenderOnClick />}
      <hr />
      {<RickAndMortyFilter />}
    </div>
  );
}

export default App;
