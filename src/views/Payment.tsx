// import React from 'react
// import { Suspense} from "react";
// import {CreditCard} from "../components/Misc/CreditCard";
import {Form, FormGroup, Input, Label} from "reactstrap";

// @ts-ignore


type tTypes = {
    toggle: boolean,
    image : string,
    title : string,
    caption: string
}

const PaymentOption: tTypes[]  = [
    {
        toggle: true,
        image : '../mastercard.png',
        title : 'Credit Card',
        caption: 'safe money transfer using your bank account Visa, Mastro'
    },
    {
        toggle: true,
        image : '../paypal.png',
        title : 'PayPal',
        caption: 'Credit card needed, safe payment online, PayPal account is necessary '
    },
]




export default function Payment() : JSX.Element {
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
                    <div className='grid grid-cols-2 gap-5 mt-4'>
                        {PaymentOption.map((pType, index) => {
                            return(
                                <div className=' relative border-2 p-4 hover:bg-blue-200 hover:border-blue-500 rounded-lg' key={index || pType.title}>
                                    <p>{pType.image}</p>
                                    <h2 className=' relativetitle text-lg lg:text-xl text-gray-800/70 mb-2'>{pType.title}</h2>
                                    <span className='relative caption block text-xs text-gray-500 '>{pType.caption}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='right hidden lg:block'>
                    <h1> Right</h1>
                </div>
                <Form>
                    <FormGroup
                        check
                        inline
                    >
                        <Input type="checkbox" />
                        <Label check>
                            Some input
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        inline
                    >
                        <Input type="checkbox" />
                        <Label check>
                            Some other input
                        </Label>
                    </FormGroup>
                </Form>
            </main>
            </section>
        </>
    )
}
