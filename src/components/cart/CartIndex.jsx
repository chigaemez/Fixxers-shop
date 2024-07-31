import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import CartContext from '../../context/CartContext'

const CartIndex = ({ item }) => {

    console.log(item)
    const GlobalState = useContext(CartContext)
    const dispatch = GlobalState.dispatch

    return (
        <li className='w-[100%] flex gap-4 '>
            <p className='ml-[-50px] text-xl font-semibold flex text-slate-600 h-0 cursor-pointer ' onClick={() => dispatch({ type: 'REMOVE', payload: item })} >x</p>
            <div className='flex items-center justify-between my-6 w-full border-b'>

                <div className="flex items-center flex-col w-[10%] justify-center">
                    <img src={item.image} alt="" className='w-[100%] h-[20vh] ' />
                    <p className='text-slate-600'>{item.title.substring(0, 12)}...</p>
                </div>
                <p className=' text-slate-600'> <span>&#x20A6;</span>{item.price}</p>

                <span className='flex items-center text-slate-600 justify-center gap-[3rem]'>
                    <FaMinus className='cursor-pointer ' onClick={() => item.quantity > 1 ? dispatch({ type: 'DECREASE', payload: item }) : dispatch({ type: 'REMOVE', payload: item })} />
                    {item.quantity}
                    <FaPlus className='cursor-pointer ' onClick={() => dispatch({ type: 'INCREASE', payload: item })} />
                </span>

                <div className="text-slate-600">
                    ${item.quantity * item.price}
                </div>
            </div>
        </li>
    )
}

export default CartIndex
