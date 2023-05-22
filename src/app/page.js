"use client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MainCarousel from "@/app/home/MainCarousel";
import ShoppingList from "@/app/home/ShoppingList";
export default function Home() {
  return (
    <main className="text-6xl">
      <MainCarousel />
      <ShoppingList />
    </main>
  );
}
