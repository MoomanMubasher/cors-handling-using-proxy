import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/population')
       .then(response => {
          console.log(response.data); // Log the received data
          setData(response.data);
       })
       .catch(error => {
          console.error(error);
       });
 }, []);


if(data.length === 0 ) return null;

  return (
    <>
     {/* <h1>Hello Reactjs</h1> */}
     {
      data?.map(dt => (
      <div key={dt.Population}>
        <p>Year :- {dt.Year}</p>
        <p>Population :- {dt.Population}</p>
      </div>
      ))
     }
    </>
  )
}

export default App
