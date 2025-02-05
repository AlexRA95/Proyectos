import {useState} from 'react';

const MisElementos = ()=>{

    const [ valor, setValor ] = useState(0);

    const [incremento , setIncremento] = useState(1);

    const incrementar = ()=>{
        let increment = document.getElementById('increment').value;
        setIncremento(Number(increment));
    };

    const sumar = ()=>{
        setValor(valor + incremento);
    };

    const restar = ()=>{
        if (valor - incremento < 0){
            setValor(0);
        }else{
            setValor(valor - incremento);
        }
    }

    const reset = ()=>{
        setValor(0);
    }

    const setear = ()=>{
        let valor = document.getElementById('setearCont').value;
        setValor(valor);
    }

    return (
        <>
        <h1>Contador = {valor}</h1>
        <button onClick={ sumar }>+{incremento}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={restar}>-{incremento}</button>

        <br />

        <input type="text" placeholder='Set el contador' id='setearCont'/>
        <button onClick={setear}>Set</button>

        <br />

        <input type="text" placeholder='Incremento' id='increment'/>
        <button onClick={incrementar}>Incremeto</button>
        </>
    );
};

export default MisElementos;