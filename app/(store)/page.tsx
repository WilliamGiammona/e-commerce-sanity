import { Button } from "@/components/ui/button";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div className="">
      {/* render all products */}
      <Button>Click Me</Button>
    </div>
  );
}
