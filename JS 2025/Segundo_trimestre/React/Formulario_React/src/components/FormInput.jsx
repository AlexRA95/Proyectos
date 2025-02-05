const FormInput = ({tipo,id,placeholder,texto,regex,error,icono}) => {
  return (
        <div className="form-floating mb-3">
            <input type={tipo} className="form-control" id={id} placeholder={placeholder} onChange={regex}/>
            <label htmlFor="floatingInput"><i className={icono}></i> {texto}</label>
            {error && <div className="text-danger">{error}</div>}
        </div>
  )
}

export default FormInput
