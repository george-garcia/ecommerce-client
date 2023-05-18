"use client"
import * as Portal from '@radix-ui/react-portal';
import {useSelector, useDispatch} from "react-redux";
import {decreaseCount, increaseCount, removeFromCart, setIsCartOpen} from "@/state";
import {MdClose} from 'react-icons/md';
import Image from 'next/image';
export default function CartMenu(){
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);

    return (
        <Portal.Root className={`fixed w-full h-full left-0 top-0 bg-black bg-opacity-5 ${isCartOpen ? "block" : "hidden"}`}>
            <div className={'fixed bottom-0 right-0 h-full max-w-md w-1/3 bg-red-500'}>
                {/*HEADER*/}
                <div className={'p-8 overflow-auto h-full'}>
                    <h3>SHOPPING BAG {cart.length} </h3>
                    <MdClose className={'cursor-pointer'} onClick={() => dispatch(setIsCartOpen({}))}/>
                </div>

                {/*CART LIST*/}
                <div>
                    {cart.map((item) => (<div key={`${item.attributes.name}-${item.id}`}>
                        <div className={'flex py-4'}>
                            <div className={'flex-grow flex-shrink basis-2/5'}>
                                <Image src={`http://localhost:3000${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} alt={item?.name} width={123} height={164}/>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>

        </Portal.Root>
        );
}
