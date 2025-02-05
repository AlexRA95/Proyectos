import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Elementos from './Contadores';

const root = document.getElementById('root');
const App = createRoot(root);

App.render(
    <StrictMode>
        <Elementos valor/>
    </StrictMode>
);