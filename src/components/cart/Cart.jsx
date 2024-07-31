import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';
import { cartBg2 } from '../../assets/Image/Index';
import { Link } from 'react-router-dom';
import CartIndex from './CartIndex';

const Cart = () => {
    let vat = 50;
    let shipping = 200;

    const GlobalState = useContext(CartContext)
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch

    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    const orderTotal = total + vat + shipping


    return (
        <div className='flex items-center justify-end   flex-col w-[100%] bg-white  '>
            <div className="hero h-[60vh] bg-base-200 object-fill " style={{ backgroundImage: `url(${cartBg2})` }}>
                <div className='h-screen w-full bg-gradient-to-r from-black' />
                <div className="flex items-center  mt-[-20rem] h-[20%]  justify-between w-[80%]">
                    <div className="flex items-center justify-center flex-col">
                        <h1 className='text-xl font-medium text-orange-500 '>// WELCOME TO OUR COMPANY</h1>
                        <h1 className='text-8xl font-medium '>Cart</h1>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                        <Link to='/' className='text-lg font-medium hover:text-orange-600'>
                            Home
                        </Link>
                        |
                        <p className='text-lg font-medium text-orange-600'> Cart</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center  flex-col justify-center w-full bg-white">
                <div className="flex w-[80%] items-center justify-center flex-col my-[4rem]">
                    <div className="flex items-center justify-between w-full ">
                        <h3 className="text-xl text-slate-600">Product</h3>
                        <h3 className="text-xl text-slate-600">Price</h3>
                        <h3 className="text-xl text-slate-600">Quantity</h3>
                        <h3 className="text-xl text-slate-600">Total</h3>
                    </div>
                    <div className="flex items-center justify-center my-[5rem] w-full border-dashed">
                        {state.length === 0 ? (<h4>Nothing to show here...</h4>) : (
                            <ul className='w-full'>
                                {

                                    state.map((item, index) => (
                                        <CartIndex item={item} key={index} />
                                    ))

                                }
                            </ul>
                        )}
                    </div>

                    <div className="flex items-center justify-end w-full ">
                        <Link to="/product">
                            <button className='btn bg-orange-600 text-slate-50 border-none'>Continue Shopping</button>
                        </Link>
                    </div>
                </div>

                <div className="flex w-[80%] my-7  items-center justify-end">
                    <div className="flex flex-col w-[36%] ">
                        <h1 className='text-2xl text-slate-600 font-semibold my-5'>Cart Totals</h1>

                        <div className="flex flex-col gap-4">
                            <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-100">
                                <p className='text-lg text-slate-600'>Cart Subtotal</p>
                                <p className='text-lg text-slate-600 mr-[2rem]'> ${total}</p>
                            </div>
                            <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-50">
                                <p className='text-lg text-slate-600'>Shipping and Handing</p>
                                <p className='text-lg text-slate-600 mr-[2rem]'> $200</p>
                            </div>
                            <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-100">
                                <p className='text-lg text-slate-600'>Vat</p>
                                <p className='text-lg text-slate-600 mr-[2rem]'> $20</p>
                            </div>
                            <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-100">
                                <p className='text-lg text-slate-600'>Oder Total</p>
                                <p className='text-lg text-slate-600 mr-[2rem]'> ${orderTotal}</p>
                            </div>

                            {
                                state.length === 0 ? (
                                    <Link to="/checkout " className='w-full cursor-not-allowed '><button className='btn mt-[1rem] w-full bg-slate-600 cursor-not-allowed text-slate-100  ' disabled> Proceed to checkout</button></Link>
                                )
                                    :
                                    (
                                        <Link to="/checkout " className='w-full '> <button className='btn mt-[1rem] w-full '> Proceed to checkout</button></Link>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
