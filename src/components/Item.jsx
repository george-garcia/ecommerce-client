"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart, decreaseCount, increaseCount } from "@/state";
import Image from "next/image";
import { MdAdd, MdRemove } from "react-icons/md";
import img from "@/assets/toa-heftiba-dti56waifB4-unsplash.jpeg";

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
        {/*<Image*/}
        {/*  className={"cursor-pointer"}*/}
        {/*  src={`http://localhost:1337/uploads/medium_andreea_chidu_FPV_2_Fb_N_Ho_E_unsplash_d0086891e1.jpeg`}*/}
        {/*  // src={`http://localhost:1337${url}`}*/}
        {/*  width={300}*/}
        {/*  height={400}*/}
        {/*  alt={item.name}*/}
        {/*  onClick={() => router.push(`/item/${item.id}`)}*/}
        {/*/>*/}
        <img
          src={`http://localhost:1337${url}`}
          width={300}
          height={400}
          alt=""
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
            <div className="flex items-center bg-red-500 rounded">
              <MdRemove onClick={() => setCount(Math.max(count - 1, 1))} />
              <h3>{count}</h3>
              <MdAdd onClick={() => setCount(count + 1)} />
            </div>
            <button
              className={"bg-white"}
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
