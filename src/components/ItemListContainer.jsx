import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";

let num= useState

function onAdd () {
  if (num > 0) { 
    console.log (num)
 } else { 
    
 }
  return console.log(onAdd);
}



const ItemListContainer= () => {
    return (
      <div>
          <ItemCount stock ="5" initial="0" />
      </div>
    );
  }
  
  export default ItemListContainer;

 //En el componente ItemListContainer debe estar definida la funcion onAdd y pasársela por props al componente ItemCount . 

//Finalmente cada vez que se aprete el botón agregar al carrito se debe llamar a la función onAdd() pasando la cantidad a consologuear o mostrar en un alert con ese valor . 