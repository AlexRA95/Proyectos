import { Contexto } from "./ContextoApi"
import { supabase } from "./conexionApi"


const ContextoApiProvider = ({ children }) => {
  return (
    <>
        <Contexto.Provider value={{supabase}}>
            {children}
        </Contexto.Provider>
    </>
  )
}

export default ContextoApiProvider
