import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/movie/:id' element={<MovieDetailPage/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
