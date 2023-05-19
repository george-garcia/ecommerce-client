"use client";
import * as Portal from "@radix-ui/react-portal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "@/state";
import { MdClose, MdRemove, MdAdd } from "react-icons/md";
import Image from "next/image";
export default function CartMenu() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Portal.Root
      className={`fixed w-full h-full left-0 top-0 bg-black bg-opacity-5 ${
        isCartOpen ? "block" : "hidden"
      }`}
    >
      <div
        className={"fixed bottom-0 right-0 h-full max-w-md w-1/3 bg-red-500"}
      >
        {/*HEADER*/}
        <div className={"p-8 overflow-auto h-full"}>
          <h3>SHOPPING BAG {cart.length} </h3>
          <MdClose
            className={"cursor-pointer"}
            onClick={() => dispatch(setIsCartOpen({}))}
          />
          {/*CART LIST*/}
          <div>
            {cart.map((item) => (
              <div key={`${item.attributes.name}-${item.id}`}>
                <div className={"flex py-4"}>
                  <div className={"flex-grow flex-shrink basis-2/5"}>
                    <Image
                      src={`http://localhost:3000${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                      alt={item?.name}
                      width={123}
                      height={164}
                    />
                  </div>
                  <div className={"flex-grow flex-shrink basis-2/5"}>
                    <div className={"flex mb-1"}>
                      {item.attributes.name}
                      <MdClose
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      />
                    </div>
                    <h3>{item.attributes.shortDescription}</h3>
                    {/*AMOUNT + / -*/}
                    <div className="flex my-3">
                      <div
                        className={
                          "flex items-center border-2 border-solid border-black"
                        }
                      >
                        <MdRemove
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        />
                        <h3>{item.count}</h3>
                        <MdAdd
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        />
                      </div>
                    </div>
                    {/*PRICE*/}
                    <h3>{item.attributes.price}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*ACTIONS*/}
          <div className="my-5">
            <div className="flex my-5">
              <h3 className={"font-bold"}>SUBTOTAL</h3>
              <h3 className={"font-bold"}>{totalPrice}</h3>
            </div>
            <button
              className={"bg-white rounded min-w-full py-5 px-10 my-5"}
              onClick={() => {
                router.push("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </Portal.Root>
  );
}
