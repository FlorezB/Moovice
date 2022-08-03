import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Weekly from './pages/Weekly';
import Popular from './pages/Popular';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';

const App = () => {



  return (
    <BrowserRouter>
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/weekly">Weekly</Link></li>
        <li><Link to="/popular">Popular</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weekly' element={<Weekly />} />
      <Route path='/popular' element={<Popular />}/>
      <Route path='/favorites' element={<Favorites />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App