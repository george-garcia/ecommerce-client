"use client"
import { useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import Link from "next/link";
import {setIsCartOpen} from "@/state";
import dynamic from "next/dynamic";
const CartMenu = dynamic(() => import('@/Globals/CartMenu'), {ssr: false});

// import CartMenu from "@/Globals/CartMenu";

export default function Navbar() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={'flex items-center w-full h-16 bg-green-400 text-black z-10'}>
            <div className={'w-4/5 mx-auto bg-white flex justify-between items-center'}>
            <Link href={'/'}>Ecommer</Link>
                <div className={'flex justify-between gap-5 z-20'}>
                    <button>1</button>
                    <button>2</button>
                    <button onClick={() => dispatch(setIsCartOpen({}))}>3</button>
                    <button>4</button>
                </div>
            </div>
            {isOpen && <CartMenu/>}
            {/*<CartMenu/>*/}
        </div>
    );

}