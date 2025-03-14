import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getAllCategories() {
  const ALL_CATEGORIES_QUERY = defineQuery(`
    *[
        _type == "category"
    ] | order(name asc)
    `);

  try {
    //Use Sanity Fetch to send the query
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });

    // return the list of categories, or an empty array if none are found
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all products", error);
    return [];
  }
}
