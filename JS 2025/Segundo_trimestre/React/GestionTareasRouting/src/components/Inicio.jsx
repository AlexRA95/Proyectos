const Inicio = () => {

  return (
    <div className="container mt-5">
  <div className="row">
    <div className="col-12 text-center">
      <h1 className="display-4 text-primary">Bienvenido a la Gestión de Tareas</h1>
      <p className="lead">Esta aplicación te permite gestionar tus tareas de manera eficiente.</p>
      <hr />
      <p>Utiliza el menú de navegación para acceder a las diferentes secciones:</p>
      <ul className="list-unstyled">
        <li><strong>Inicio:</strong> Página de bienvenida.</li>
        <li><strong>Lista de Tareas:</strong> Visualiza todas tus tareas.</li>
        <li><strong>Agregar Tarea:</strong> Añade nuevas tareas a tu lista.</li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Inicio
