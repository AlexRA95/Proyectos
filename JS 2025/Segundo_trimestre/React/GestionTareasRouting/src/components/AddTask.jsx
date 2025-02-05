import { useState } from 'react';
import PropTypes from 'prop-types'

const AddTask = ({ onAddTask }) => {
  const [tarea, setTarea] = useState("");

  const controlSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim()) {
      onAddTask(tarea);
      setTarea("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Agregar Nueva Tarea</h2>
          <form onSubmit={controlSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Introducir Tarea"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
              />
              <label htmlFor="floatingInput">Tarea</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Añadir Tarea</button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;