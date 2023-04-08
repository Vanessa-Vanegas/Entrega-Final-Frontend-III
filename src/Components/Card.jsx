import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import {useContext} from 'react';



const Card = ({ name, username, id }) => {
  const {Favs,setFavs} = useContext(ContextGlobal)

  const addFav = ()=>{
    // logica para agregar la Card en el localStorage
    let isCreated = false
    Favs.forEach((e,index) => {
      if (e.id === id) { 
        isCreated = true        
        Favs.splice(index,1)  
    }
            
  })
  if (isCreated === false) {
    Favs.push({ 
      "name":name,
      "username":username,
      "id":id        
    })
    localStorage.setItem("favs", JSON.stringify(Favs)) 
    alert("Added successfully")
  } else {
      localStorage.setItem("favs", JSON.stringify(Favs))
      alert("Deleted successfully")
    }
  setFavs(Favs)
  }

  return (
    <div className="card">
        <img src="/images/doctor.jpg" alt="Doctor" />
        <h2><Link to={`/dentist/${id}`}>{name}</Link></h2>
        <h3>{username}</h3>
        <button onClick={addFav} className="favButton">Add fav⭐</button>
    </div>
  );
};

export default Card;
