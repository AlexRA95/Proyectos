const BtnForm = ({ correcto }) => {
    return (
      <button id="mandar" className="btn btn-primary" disabled={!correcto}>Enviar</button>
    );
  };
  
  export default BtnForm;