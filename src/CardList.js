import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const CardList = ({robots})=> {
    
    const cardArray = robots.map((user,id)=>{
        return <Card 
         key = {id} 
         id = {robots[id].id} 
         name = {robots[id].name}
        email = {robots[id].email} />
        
    })
      
    return(

       <div>
         {cardArray}
       </div>

    )
}

export default CardList