import React from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

export const urlDentists = 'https://jsonplaceholder.typicode.com/users'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([])

  const { Theme } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get(urlDentists)
    .then(res => setDentists(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <main className="home" style={{background:Theme?.backgroundHome, color:Theme?.color}}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => {
                  return <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
              })/* renderizacion de las cards */}
      </div>
    </main>
  )
}

export default Home