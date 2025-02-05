import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import FormApp from './components/FormApp.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FormApp />
    </StrictMode>
)
