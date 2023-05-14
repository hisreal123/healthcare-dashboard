// import React from 'react
// import { Suspense} from "react";
import {CreditCard} from "../components/Misc/CreditCard";
import {PayPal} from "../components/Misc/PayPal";

// @ts-ignore


import {useState} from "react";


export default function Payment() : JSX.Element {
const [checkMaster, setCheckMaster] = useState(true);
const [checkPayPal, setCheckPayPal] = useState(false);

    const handleCheckMaster = (event: any) => {
        setCheckMaster(event.target.checked);
        setCheckPayPal(false);
    };

    const handleCheckPayPal = (event: any) => {
        setCheckPayPal(event.target.checked);
        setCheckMaster( false );
    };

    // @ts-ignore
    return (
        <>
            <section className='lg:w-[90%] lg:mx-auto '>

            <main className='py-3 grid lg:grid-cols-2 gap-5 '>
                <div className='left '>
                    <div className=''>
                        <h1 className='text-gray-700/80 font-bold  text-xl '> Chose your payment method</h1>
                        <p className='text-gray-400/80 text-xs '>Your payment information are secure and no sharing with third parties </p>
                    </div>

                    {/* choose wisely */}
                    <div className='grid grid-cols-2 gap-5 my-5'>
                                <div className=' flex items-start relative border-2 p-4 hover:bg-blue-200 hover:border-blue-500 rounded-lg' >
                                    <input
                                        type="checkbox"
                                        className='border-2 mr-2 mt-2 disabled:cursor-not-allowed '
                                        checked={checkMaster}
                                        onChange={handleCheckMaster}
                                        disabled={true}
                                    />
                                    <div>
                                        <img src='../mastercard.png'  className='h-8'/>
                                        <h2 className=' relativetitle text-lg lg:text-xl text-gray-800/70 mb-2'>Credit Card</h2>
                                        <span className='relative caption block text-xs text-gray-500 '>safe money transfer using your bank account Visa, Mastro</span>
                                    </div>
                                </div>

                        <div className=' flex items-start relative border-2 p-4 hover:bg-blue-200 hover:border-blue-500 rounded-lg' >
                                    <input
                                        type="checkbox"
                                        className='border-2 mr-2 mt-2 '
                                        checked={checkPayPal}
                                        onChange={handleCheckPayPal}
                                    />
                                    <div>
                                        <img src='../paypal.png'  className='h-8' />
                                        <h2 className=' relativetitle text-lg lg:text-xl text-gray-800/70 mb-2'>PayPal</h2>
                                        <span className='relative caption block text-xs text-gray-500 '>Credit card needed, safe payment online, PayPal account is necessary </span>
                                    </div>
                                </div>

                    </div>


                {/*    Display*/}
                    {
                        checkPayPal ? (
                        <PayPal />
                    ): (
                        <CreditCard />
                    )}
                </div>

                <div className='right hidden lg:block'>
                    <h1> Right</h1>
                </div>

            </main>
            </section>
        </>
    )
}
