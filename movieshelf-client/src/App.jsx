import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {

  return (
    <div>
      <NavBar />
      <main className="container py-5">
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/movie/:id' element={<MovieDetailPage/>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App;
