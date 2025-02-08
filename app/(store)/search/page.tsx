import React from "react";
const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const { query } = await searchParams;
  return <div>Search Page</div>;
};

export default SearchPage;
