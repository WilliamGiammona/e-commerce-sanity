import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "@/components/ProductsView";
import BlackFridayBanner from "@/components/BlackFridayBanner";
import Disclaimer from "@/app/disclaimer/page";

export const dynamic = "force-static";
export const revalidate = 600; // revalidate at most every 60 seconds

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
      <Disclaimer />
      <BlackFridayBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
