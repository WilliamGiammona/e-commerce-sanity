import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getAllProducts() {
  const ALL_PRODUCTS_QUERY = defineQuery(`
    *[
        _type == "product"
    ] | order(name asc)
    `);

  try {
    //Use Sanity Fetch to send the query
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });

    // return the list of products, or an empty array if none are found
    return products.data || [];
  } catch (error) {
    console.error("Error fetching all products", error);
    return [];
  }
}
