import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

import { mastercard, paypal } from './../../assets/Image/Index'
import CartContext from '../../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const Checkout = () => {
  const [value, setValue] = useState('');
  const [CvvValue, setCvvValue] = useState('');

  let delivery = 25.99
  let tax = 12.99

  const GlobalState = useContext(CartContext)
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch

  const total = state.reduce((total, item) => {
    return total + item.price + delivery
  }, 0)

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Remove any non-numeric characters
    const numericValue = inputValue.replace(/\D/g, '');
    // Insert a space after every fourth character
    const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ');

    setValue(formattedValue);
  };
  const handleCvvChange = (e) => {
    const inputValue = e.target.value;
    // Remove any non-numeric characters
    const numericValue = inputValue.replace(/\D/g, '');
    // Insert a space after every fourth character
    const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ');

    setCvvValue(formattedValue);
  };


  const orderTotal = total  + tax




  return (
    <div className='flex items-center justify-center bg-slate-100 '>
      <div className="flex flex-row w-[80%]">

        <div className="flex w-[80%] my-[3rem] flex-col items-center justify-center">
          <div className="flex">
            <h1 className='flex items-center flex-row-reverse gap-3'>Back <FaArrowLeft/> </h1>
          </div>
          <div className="flex flex-col bg-white shadow-lg w-[80%] px-8 py-8 rounded-xl">
            <div className="flex flex-col w-[90%] ">
              <input type="radio" name='select' id='option-1' className='hidden' />
              <input type="radio" name='select' id='option-2' className='hidden' />
              <label htmlFor='option-1' className='option-1 h-[6vh] duration-500 cursor-pointer px-3 border flex items-center rounded'>
                <div className='w-[20px] h-[20px] rounded-full relative bg-gray-300 dot' />
                <div className='text-lg pl-3'>Get it delivered in only 30 minutes</div>
              </label>
              <label htmlFor='option-2' className='option-2 duration-500 h-[6vh] my-9 border cursor-pointer  px-3 flex items-center rounded'>
                <div className='w-[20px] h-[20px] rounded-full relative bg-gray-300 dot' />
                <div className='text-lg pl-3'>Pickup available in 3 store near you </div>
              </label>
            </div>

            <div className="flex flex-col w-[90%]">
              <h1 className='text-lg'>Shipping Address</h1>
              <input type="text" placeholder='Delivery Address ' className='h-[6vh] px-3 text-lg bg-[#fff] border-[2px] border-slate-400 text-[#333] outline-none rounded' />
            </div>
            <div className="flex flex-col w-[90%] my-[3rem]">
              <h1 className='text-lg'>Payment Information</h1>
              <div className="flex gap-5">
                <div className="flex cursor-pointer border-[3px] rounded bg-slate-300 border-blue-800 w-[90px] items-center justify-center h-[50px] ">
                  <img src={mastercard} alt="" className='w-[70px]' />
                </div>
                <div className="flex cursor-pointer border-[3px] rounded  w-[90px] items-center justify-center h-[50px] ">
                  <img src={paypal} alt="" className='w-[40px]' />
                </div>
              </div>
              <div className="flex flex-col w-[90%] my-5">
                <label className='text-lg'>Card Name</label>
                <input type="text" placeholder='Card name ' className='h-[6vh] px-3 text-lg bg-[#fff] border-[2px] border-slate-400 text-[#333] outline-none rounded' />
              </div>
              <div className="flex flex-col w-[90%] my-5">
                <label className='text-lg'>Card Number</label>
                <input
                  placeholder='Card number '
                  type="text"
                  maxLength={20}
                  value={value}
                  onChange={handleChange}
                  className='h-[6vh] px-3 text-lg bg-[#fff] border-[2px] border-slate-400 text-[#333] outline-none rounded' />
              </div>
              <div className="flex items-center   w-[90%] gap-4 my-5">
                <div className="flex flex-col w-full">
                  <label className='text-lg text-[#333]'>Expire Date</label>
                  <input
                    placeholder='Card number '
                    type="month"
                    className='h-[6vh] px-3 w-full text-lg bg-[#fff] border-[2px] border-slate-400 text-[#333] outline-none rounded' />

                </div>
                <div className="flex flex-col  w-full">
                  <label className='text-lg text-[#333]'>CVV</label>
                  <input
                    placeholder='Card number '
                    type="number"
                    value={CvvValue}
                    onChange={handleCvvChange}
                    maxLength={3}
                    className='h-[6vh] px-3 w-full text-lg bg-[#fff] border-[2px] border-slate-400 text-[#333] outline-none rounded' />

                </div>
              </div>
              <div className="flex items-center justify-between w-[90%]">
                <Link to="/cart" className='w-[90%]'>
                  <button className='btn bg-transparent w-[40%]'>Back</button>
                </Link>
                <button className='btn  w-[50%]'>Confirm Payment ${orderTotal}</button>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white w-[30%] h-[60vh] my-[3rem] rounded-lg py-4 px-3">
          <h1 className='text-xl text-slate-600'>Order Summary</h1>

          <div className="flex items-center my-6 justify-between">
            {
              state.map((item, index) => (
                <>
                  <p className='flex items-center text-slate-600'>x{item.quantity}</p>
                  <h1 className='text-lg text-slate-600'>{item.title.substring(0, 22)}...</h1>
                  <h1 className='text-slate-600'>${item.price}</h1>
                  <FaTrash className='cursor-pointer text-slate-600' onClick={() => dispatch({ type: 'REMOVE', payload: item })}/>
                </>
              ))
            }
          </div>
          <hr />
          <div className="flex flex-col gap-4 my-3">
            <div className="flex items-center justify-between">
              <h1 className='text-lg text-slate-600'>Delivery</h1>
              <p className='text-lg text-slate-600'>${delivery}</p>
            </div>
            <div className="flex items-center justify-between ">
              <h1 className='text-lg text-slate-600'>Discount</h1>
              <p className='text-lg text-slate-600'>$0.00</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 my-3">
            <div className="flex items-center justify-between">
              <h1 className='text-lg text-slate-600'>Total (Exc Tax)</h1>
              <p className='text-lg text-slate-600'>${total}</p>
            </div>
            <div className="flex items-center justify-between ">
              <h1 className='text-lg text-slate-600'>Tax</h1>
              <p className='text-lg text-slate-600'>${tax}</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-4 my-3">
            
            <div className="flex items-center justify-between ">
              <h1 className='text-lg text-slate-600'>Order Total</h1>
              <p className='text-lg text-slate-600'>${orderTotal}</p>
            </div>
          </div>
          <hr />

          <div className="flex flex-col gap-4 my-6">
            
            <div className="flex items-center justify-between bg-green-100 h-[6vh] border-[1px] border-green-700 px-2 rounded ">
              <h1 className='text-sm text-green-600 font-semibold'>Your total saving for this order </h1>
              <p className='text-sm text-green-600 font-semibold'>${orderTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
