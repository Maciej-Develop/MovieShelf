import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8080/movie/all")
      result.json().then(json => {
        console.log(json);
        setData(json);
      })
    }
    fetchData();
  },[]);

  return (
    <>
      
    </>
  )
}

export default App
