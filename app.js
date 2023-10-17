import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css';

function App() {
  const [data, setdata] = useState([]) 
   useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
    .then(res=> setdata(res.data.data))
    .catch(err=> console.log(err));
}, [])
  return (
    <div >
      <h2>axios library in React js</h2>
      {
        data.map((d, i) => {
          return <p key={i}> {d.id}</p>

        })
      }
      
    </div>
  );
}

export default App;
