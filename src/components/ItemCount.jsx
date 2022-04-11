import React, {useState} from "react" //6.8K (gzipped:2.7K);
import ItemListContainer from "./ItemListContainer";

const ItemCount = ({initial,stock,onAdd}) => {
    const [contador, setContador] = useState( 1 );
    

    const increment = () => {
        if (contador < 5 ) {
            setContador(contador+1)
        }
    }

    const decrement = () => {
        if (contador > 1 ){
            setContador(contador -1)
        }
    }
        return (
            <div>
                <div className='button-container'>
                    <button onClick={decrement} className='buttons-counters'> - </button>
                    {contador}
                    <button onClick={increment} className='buttons-counters'> + </button>
                    <button className='buttons-counters' onAdd={useState} > Agregar al carrito </button>
                </div>
            </div>
        )
}

export default ItemCount

//En el componente ItemListContainer debe estar definida la funcion onAdd y pasársela por props al componente ItemCount . 
//El componente ItemCount debe recibir 3 props (initial, stock,onAdd).
//Tenes que definir las props en el componente ItemCount en la linea 3 . Por ejemplo: 
//const ItemCount = ({initial,stock,onAdd}) =>{
//Finalmente cada vez que se aprete el botón agregar al carrito se debe llamar a la función onAdd() pasando la cantidad a consologuear o mostrar en un alert con ese valor . 