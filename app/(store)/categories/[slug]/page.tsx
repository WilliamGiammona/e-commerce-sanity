import React from "react";

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  return <div>CategoryPage</div>;
}

export default CategoryPage;
