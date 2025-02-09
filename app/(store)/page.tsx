import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "@/components/ProductsView";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  console.log("Products:", products);

  return (
    <div className="">
      {/* render all products */}
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
        hi
      </div>
    </div>
  );
}
