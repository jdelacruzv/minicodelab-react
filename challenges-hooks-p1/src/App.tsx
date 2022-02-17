import './App.css';
import { BitcoinConversor } from './components/BitcoinConversor';
import { ChangeName } from './components/ChangeName';
import { RenderOnClick } from './components/RenderOnClick';

function App() {
  return (
    <div className="app">
      {<BitcoinConversor/>}
      <hr />
      {<ChangeName />}
      <hr />
      {<RenderOnClick />}
    </div>
  );
}

export default App;
