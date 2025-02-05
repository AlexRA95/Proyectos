
const ItemGrid = (gif) => {
  return (
    <div>
        <div className='card bg-dark text-light m-2'>
            <img src={gif.url_img} alt={gif.title} className='card-img-top' />
            <div className='card-body'>
            <h5 className='card-title'>{gif.title}</h5>
            </div>
        </div>
    </div>
  )
}

export default ItemGrid
