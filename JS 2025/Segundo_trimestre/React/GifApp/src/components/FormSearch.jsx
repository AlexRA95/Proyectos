import { useState } from 'react';

const FormSearch = ({onAddBusqueda}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onEnviar = (e) => {
        e.preventDefault();
        onAddBusqueda(inputValue);
        setInputValue('');
    }

  return (
    <form onSubmit={onEnviar}>
        <div className="form-floating mb-3">
        <input
            type="text"
            value={inputValue}
            className="form-control"
            name="formId1"
            id="busqueda"
            placeholder=""
            onChange={handleInputChange}
        />
        <label htmlFor="formId1">Categoria GIF</label>
    </div>
    </form>
    
  )
}

export default FormSearch;
