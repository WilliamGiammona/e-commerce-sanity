import { defineField } from "sanity";
import { TrolleyIcon } from "@sanity/icons";

const productType = {
  name: "productType",
  title: "Product type",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default productType;
