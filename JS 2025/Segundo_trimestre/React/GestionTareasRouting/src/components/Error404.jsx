import React from 'react'

const Error404 = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="text-light">Página no encontrada</h2>
      <p className="text-muted">Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/" className="btn btn-primary mt-3">Volver al inicio</a>
    </div>
  )
}

export default Error404
