"use client";
import { useBasketStore } from "../store";

function BasketPage() {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  return <div>page</div>;
}

export default BasketPage;
