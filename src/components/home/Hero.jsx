import React from 'react'
import { Link } from 'react-router-dom'
import { hero } from '../../assets/Image/Index'
import { MdLocalShipping, MdCardGiftcard } from 'react-icons/md'
import { FaRegCreditCard } from 'react-icons/fa'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${hero})` }}>
                <div className='h-screen w-full bg-gradient-to-r from-black' />
                <div className="hero-content text-center">
                    <div className="w-[70%]">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6 ">Looking for a right place to shop for you groceries welcome to fixxers where you will get all veriaties of your choice </p>
                        <Link to='/product'><button className="btn btn-primary">start shopping</button></Link>
                    </div>
                </div>
                <div className='mt-[35rem] border-t-2 border-b-2 h-[15 text-slate-100vh] w-[70%] grid grid-cols-3 place-items-center '>
                    <div className="flex items-center gap-4 justify-center">
                        <MdLocalShipping className='text-4xl' />
                        <div>
                            <h1 className='text-xl text-slate-100'>Free Shipping</h1>
                            <p className='text-lg text-slate-100'>On all orders over 50,000.00</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                        <FaRegCreditCard className='text-4xl' />
                        <div>
                            <h1 className='text-xl text-slate-100'>Secure checkout</h1>
                            <p className='text-lg text-slate-100'>Protected by Paypal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                        <MdCardGiftcard className='text-4xl' />
                        <div>
                            <h1 className='text-xl text-slate-100'>Offer & gift here</h1>
                            <p className='text-lg text-slate-100'>On all orders over 100,000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
