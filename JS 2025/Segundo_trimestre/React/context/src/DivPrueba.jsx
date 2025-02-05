import { useState, useEffect, useContext } from "react";
import { Contexto } from "./ContextoApi";

const DivPrueba = () => {
    const cliente = useContext(Contexto);

    const [elementos, setElementos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data, error } = await cliente
                .from("LOL_PRO")
                .select("*");
            if (error) {
                console.error(error);
            } else {
                setElementos(data);
                console.log(data);
            }
        };

        getData();
    }, [cliente]);

    return (
        <div>
            <h1>Hola</h1>
            {elementos.map((elemento) => (
                <div key={elemento.id}>{elemento.nombre}</div>
            ))}
        </div>
    );
};

export default DivPrueba;