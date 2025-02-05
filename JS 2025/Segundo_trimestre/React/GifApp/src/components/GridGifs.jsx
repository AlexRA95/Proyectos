import { useState, useEffect } from 'react'
import getGifs  from '../helpers/GetGifs.js'
import ItemGrid from './ItemGrid.jsx'

const GridGifs = ({ busqueda }) => {

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs(busqueda).then(gifs => setGifs(gifs))
    },[]);

  return (
    <>
      <h1 className='text-light border-bottom border-light-subtle p-3'>{busqueda}</h1>
      <div className='row'>
        {
          gifs.map(gif => (
            <div key={gif.id} className='col-12 col-md-4'>
              <ItemGrid key={gif.id} {...gif} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default GridGifs
