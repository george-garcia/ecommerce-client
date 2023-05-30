"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart, decreaseCount, increaseCount } from "@/state";
import { MdAdd, MdRemove } from "react-icons/md";
import Item from "@/components/Item";

export default async function itemId({ params }) {
  const dispatch = useDispatch();
  const { itemId } = params;
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]);

  return (
    <div className={" w-3/4 my-20 mx-auto"}>
      <div className="flex flex-wrap gap-10">
        {/*IMAGES*/}
        <div className="flex"></div>
      </div>
    </div>
  );
}
