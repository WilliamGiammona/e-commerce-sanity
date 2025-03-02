"use server";
import stripe from "@/lib/stripe";

import { BasketItem } from "@/app/(store)/store";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type GroupedBasketItem = {
  product: BasketItem["product"];
  quantity: number;
};

export async function createCheckoutSession(
  items: GroupedBasketItem[],
  metedata: Metadata
) {
  try {
    // check if any grouped items don't have a price
    const itemsWithoutPrice = items.filter((item) => !item.product.price);
    if (itemsWithoutPrice.length > 0) {
      throw new Error("Some items don't have a price.");
    }

    // Search for existing customer by email
    const customers = await stripe.customers.list({
      email: metedata.customerEmail,
      limit: 1,
    });

    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }
  } catch (error) {
    console.log("Error creating checkout session:", error);
    throw error;
  }
}
