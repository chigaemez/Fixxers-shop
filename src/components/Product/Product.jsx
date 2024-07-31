import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product_items from './Product_items'
import Skeleton from 'react-loading-skeleton'

const Product = () => {
    const [product, setProduct] = useState([])
    const [filter, setFilter] = useState(product)
    const [loading, setLoading] = useState(false)

    let componentMount = true


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const reponse = await fetch('https://fakestoreapi.com/products');
            if (componentMount) {
                setProduct(await reponse.clone().json());
                setFilter(await reponse.json());
                setLoading(false)
            }
            return () => {
                componentMount = false
            }
        }

        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className='flex items-center justify-center '>
                    <Skeleton height={350} />
                </div>
                <div className='flex items-center justify-center '>
                    <Skeleton height={350} />
                </div>
                <div className='flex items-center justify-center '>
                    <Skeleton height={350} />
                </div>
                <div className='flex items-center justify-center '>
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = product.filter((x) => x.category === cat);
        setFilter(updateList)
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='flex  my-[40px] gap-5 w-[100%]'>
                    <button className='btn' onClick={() => setFilter(product)}>All</button>
                    <button className='btn' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn' onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>

            </>
        )
    }



    return (
        <div className='flex items-center justify-center bg-slate-100'>
            <div className="flex flex-col items-center justify-center w-[80%]">

                <h1 className='text-slate-600 text-4xl font-medium font-mono my-5 '>Our Products</h1>
                <p className='text-slate-600 text-lg '>A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
                <div className="flex  w-[100%] items-center justify-center">
                    {
                        loading ? <Loading /> : <ShowProduct />
                    }
                </div>
                <div className="grid grid-cols-4 gap-[2rem] place-items-center">
                    {
                        filter.map((item, index) => (
                            <Product_items item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
