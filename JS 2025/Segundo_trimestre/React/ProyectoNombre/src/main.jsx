import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import MiNombre from "./miNombre";
import MiBoton from './miBoton';


const root = document.getElementById('root');

const App = createRoot(root);

App.render(
  <StrictMode>
    <h1>Funciona</h1>
    <MiNombre/>
    <MiBoton/>
  </StrictMode>
);
