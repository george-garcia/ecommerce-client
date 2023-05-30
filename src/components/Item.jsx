"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart, decreaseCount, increaseCount } from "@/state";
import { MdAdd, MdRemove } from "react-icons/md";

export default function Item({ item, width }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  console.log(category, price, name, url);

  return (
    <div style={{ width: width }}>
      <div
        className={"relative"}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          className={"cursor-pointer"}
          src={`http://localhost:1337${url}`}
          width={300}
          height={400}
          alt={item.name}
          onClick={() => router.push(`/item/${item.id}`)}
        />
        {/*{`${category}-${price}-${name}-${url}`}*/}
        <div
          className={isHovered ? "block" : "hidden"}
          style={{
            bottom: "10%",
            padding: "0 5%",
            width: "100%",
            left: "0",
            position: "absolute",
          }}
        >
          <div className="flex justify-between text-lg">
            <div className="flex items-center bg-white rounded gap-1 py-1 px-2 border-solid border-zinc-800 border-2 ">
              <MdRemove onClick={() => setCount(Math.max(count - 1, 1))} />
              <h3>{count}</h3>
              <MdAdd onClick={() => setCount(count + 1)} />
            </div>
            <button
              className={"bg-zinc-600 text-zinc-100 py-1 px-2 rounded"}
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-1">
        {/*{category*/}
        {/*  .replace(/([A-Z])/g, " $1")*/}
        {/*  .replace(/^./, (str) => str.toUpperCase())}*/}
        <h3>{name}</h3>
        <h3 className={"font-bold"}>{price}</h3>
      </div>
    </div>
  );
}
