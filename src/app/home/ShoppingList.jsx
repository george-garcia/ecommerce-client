"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "@/state";
import * as Tabs from "@radix-ui/react-tabs";
import Item from "@/components/Item";
import "./ShoppingList.css";

export default function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  console.log("items", items);

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  const categories = [
    { display: "ALL", state: "all" },
    { display: "NEW ARRIVALS", state: "newArrivals" },
    { display: "BEST SELLERS", state: "bestSellers" },
    { display: "TOP RATED", state: "topRated" },
  ];

  return (
    <div style={{ width: "80%", margin: "80px auto" }}>
      <h3 className="text-center">
        Our Featured <b>Products</b>
      </h3>
      <div className={"flex justify-center"}>
        <Tabs.Root className={""} defaultValue={"ALL"}>
          <Tabs.List
            aria-label="products tabs"
            className={"text-gray-400 text-lg m-6"}
          >
            {categories.map((category) => {
              return (
                <Tabs.Trigger
                  key={category.display}
                  className="TabsTrigger px-5 transition-all duration-300 pb-1 "
                  value={category.display}
                  onClick={() => setValue((state) => category.state)}
                >
                  {category.display}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          <div
            className={"mx-auto my-0 grid justify-around"}
            style={{
              gridTemplateColumns: "repeat(auto-fill, 300px)",
              rowGap: "20px",
              columnGap: "1.33%",
            }}
          >
            <Tabs.Content value="ALL" forceMount={true}>
              {value === "all" &&
                items.map((item) => (
                  <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
            </Tabs.Content>
            <Tabs.Content value="NEW ARRIVALS" forceMount={true}>
              {value === "newArrivals" &&
                newArrivalsItems.map((item) => (
                  <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
            </Tabs.Content>
            <Tabs.Content value="BEST SELLERS" forceMount={true}>
              {value === "bestSellers" &&
                bestSellersItems.map((item) => (
                  <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
            </Tabs.Content>
            <Tabs.Content value="TOP RATED" forceMount={true}>
              {value === "topRated" &&
                topRatedItems.map((item) => (
                  <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}
