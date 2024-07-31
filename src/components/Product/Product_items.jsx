import React, { useContext, useState } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa6'
import { FaEye, FaShoppingCart, FaHeart } from 'react-icons/fa'

import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Product_items = ({ item }) => {


    const Globalstate = useContext(CartContext)
    const dispatch = Globalstate.dispatch;




    return (
        <div className=" group card w-full bg-base-100 shadow-xl h-[60vh] lg:mx-5 my-[5rem]  duration-500 relative">

            <figure className='bg-white'><img src={item.image} alt="Shoes" className='w-[40%] h-[30vh] ' /></figure>
            <div className="card-body h-[30vh] ">

                <h1 className='text-white font-mono'>{item.title.substring(0, 12)}...</h1>
                <hr />
                <div className="flex items-center justify-between">
                    <p className='text-white text-lg'><span>$</span> {item.price}</p>
                    <p className='flex items-center gap-4'>Rating: {item.rating.rate} <FaStar className='' /></p>
                </div>
                <h1 className='text-white font-mono mt-5'>{item.description.substring(0, 92)}...</h1>
            </div>
            <div className='absolute inset-0 flex translate-y-[30px] h-[30vh] rounded-lg opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500  group-hover:translate-y-[0px]  rounded-b-lg'>
                <div className="flex gap-2 items-center justify-center w-full">
                    <Link to={`/product/${item.id}`} className="flex cursor-pointer items-center justify-center w-[20%]  h-[7vh] rounded-full bg-white">
                        <FaEye className='text-slate-600  ' />
                    </Link >
                    <div className="flex cursor-pointer items-center justify-center w-[20%]  h-[7vh] rounded-full bg-white" onClick={() => dispatch({ type: "ADD", payload: item })}>
                        <FaShoppingCart className='text-slate-600  ' />
                    </div>
                    <div className="flex cursor-pointer items-center justify-center w-[20%]  h-[7vh] rounded-full bg-white">
                        <FaHeart className='text-slate-600 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Product_items
