import React from "react";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {Theme} = useContext(ContextGlobal)
  
  const [dentistFav, setDentistFav] = useState([])

  useEffect(() => {
    setDentistFav(JSON.parse(localStorage.getItem('favs')))
  }, [dentistFav])

  const handleClearFavs = (e) => {
    localStorage.clear()
  }

  return (
    <div div className="favs" style={{background:Theme.backgroundHome, color:Theme.color}}>
      <h1>Dentists Fav</h1>
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
      <button className="buttonDelete" onClick={handleClearFavs}>DELETE ALL DENTIST</button>
      <div className="card-grid">
        {dentistFav?.map(info => <Card key={info.id} name={info.name} username={info.username} id={info.id}/>)}
      </div>
    </div>
   
  );
};

export default Favs;
