import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home';
import Weekly from './pages/weekly';
import Popular from './pages/popular';
import Favorites from './pages/favorites';
import NotFound from './pages/notFound';

const App = () => {

  const filmsData = async () => {
    const request = await fetch ('')
    const response = await request.json()
  }

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