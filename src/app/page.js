"use client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MainCarousel from "@/app/home/MainCarousel";
import ShoppingList from "@/app/home/ShoppingList";
import Subscribe from "@/app/home/Subscribe";
export default function Home() {
  return (
    <main className="text-6xl">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </main>
  );
}
