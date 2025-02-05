import React from 'react'
import PropTypes from 'prop-types';

const Task = ({ tareas }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Lista de Tareas</h2>
          {tareas.length === 0 ? (
            <p className="text-center">No hay tareas pendientes.</p>
          ) : (
            <ul className="list-group">
              {tareas.map((tarea, index) => (
                <li key={index} className="list-group-item">
                  {tarea}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

Task.propTypes = {
  tareas: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Task
