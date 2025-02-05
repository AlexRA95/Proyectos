import { useState } from 'react';
import FormSearch from './FormSearch.jsx';
import GridGifs from './GridGifs.jsx';
import './GifApp.css'

const GifApp = () => {

    const [busquedas, setBusquedas] = useState([])

    const addBusqueda = (busqueda) => {
        setBusquedas([...busquedas, busqueda]);
        console.log(busquedas);
    }

  return (
    <>
        <h1 className='tituloT1'>GifApp</h1>
        <FormSearch onAddBusqueda={addBusqueda}/>
        {
            busquedas.map((busqueda)=>{
                return <GridGifs key={busqueda} busqueda={busqueda}/>
            })
        }
    </>
  )
}

export default GifApp;