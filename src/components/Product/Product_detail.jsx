import React, { useState, useEffect, useContext } from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa6'
import Skeleton from 'react-loading-skeleton'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const Product_detail = () => {
    const { id } = useParams()
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)

    const Globalstate = useContext(CartContext)
    const dispatch = Globalstate.dispatch;


    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const reponse = await fetch(`https://fakestoreapi.com/products/${id}`)
            setproduct(await reponse.json());
            setloading(false)
        }

        getProduct()
    }, [])


    const Loading = () => {
        return (
            <>
                <div className='flex items-center justify-center gap-[3rem] w-[100%]'>
                    <div className="skeleton w-[70%] h-[400px]"></div>
                </div>

                <div className="flex gap-[20px] flex-col">
                    <div className='skeleton w-[20%] h-9'></div>
                    <div className='skeleton w-[90%] h-8'></div>
                    <div className='skeleton w-[20%] h-8'></div>
                    <div className='skeleton w-[20%] h-8'></div>
                    <div className='skeleton w-[90%] h-8'></div>
                    <div className='skeleton w-[50%] h-8'></div>
                </div>
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="flex items-center justify-center gap-[3rem] w-[100%]">
                    <img src={product.image} alt="" className='w-[70%] h-[400px]' />
                </div>
                <div className="flex gap-[20px] flex-col">
                    <h1 className='uppercase text-slate-700 text-3xl'>{product.category}</h1>
                    <h1 className='text-7xl font-light text-slate-700'>{product.title}</h1>
                    <p className='flex items-center  gap-4 text-slate-600'>Rating {product.rating && product.rating.rate} <FaStar /></p>
                    <p className='text-3xl text-slate-700' l>${product.price}</p>
                    <p className='text-slate-800  text-2xl'>{product.description}</p>
                    <div className="flex items-center  w-[90%] gap-4">
                        <button className='btn w-[30%] text-lg' onClick={() => dispatch({ type: "ADD", payload: product })}> Add to Cart <FaCartPlus /> </button>
                        <Link to="/cart" className='w-[30%]'>
                            <button className='btn bg-white bottom-[2px] text-slate-600 hover:text-white' > Go to Cart <FaCartPlus /> </button>
                        </Link>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div className='bg-white flex relative items-center h-[100vh] justify-center'>
            <Link to='/product' className='text-slate-800 top-[1rem] left-[1rem] text-3xl absolute'><FaArrowLeft /></Link>
            <div className="flex items-center justify-center w-[80%] ">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Product_detail