import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mounting from './component/Mounting';
import Home from './Home';
import Updating from './component/Updating';
import Unmouting from './component/Unmouting';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mounting' element={<Mounting />} />
      <Route path='/updating' element={<Updating />} />
      <Route path='/unmounting' element={<Unmouting />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
