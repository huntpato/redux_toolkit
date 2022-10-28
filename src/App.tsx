import './App.css';
import NavBar from './components/Navigation/NavBar';
import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Greeting/>}/>
          <Route path='/counter' element={<Counter/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
