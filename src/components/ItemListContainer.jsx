import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemListContainer= () => {
  function onAdd (c) {
    alert(`se agregó ${c} productos`)
  }
    return (
      <div>
          <ItemCount stock ={5} initial={1} onAdd= {onAdd} />
      </div>
    );
  }
  
  export default ItemListContainer;
