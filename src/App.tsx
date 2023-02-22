import './App.css';
import NavBar from './components/Navigation/NavBar';
import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';
import Pokemons from './components/Pokemons/Pokemons';

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Greeting/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/pokemons' element={<Pokemons/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
