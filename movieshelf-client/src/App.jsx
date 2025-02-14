import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/movie/:id' element={<MovieDetail/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
