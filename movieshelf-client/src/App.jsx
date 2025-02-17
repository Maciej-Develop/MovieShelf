import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/movie/:id' element={<MovieDetailPage/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App;
