import {createRoot} from 'react-dom/client'


const HolaMundo =()=>{
    return(
        <h1>Hola mundo</h1>
    )
};

const root = document.getElementById('root');

const App = createRoot(root);

App.render(
    <HolaMundo />
);