import { BasketIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session Id",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer Id",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
