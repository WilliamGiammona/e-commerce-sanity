import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div className="">
      {/* render all products */}
      <Button>Click Me</Button>
    </div>
  );
}
