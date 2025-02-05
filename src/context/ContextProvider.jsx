import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer'

const ContextProdider = ({children}) => {



  const [state, dispatch] = useReducer(CartReducer, [])

 

    const info = {state, dispatch}


    return <CartContext.Provider value={info}>{children}</CartContext.Provider>
}

export default ContextProdider