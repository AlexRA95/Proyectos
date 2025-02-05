import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContextoApiProvider from './ContextoApiProvider'
import DivPrueba from './DivPrueba'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextoApiProvider>
        <DivPrueba />
    </ContextoApiProvider>
  </StrictMode>,
)
