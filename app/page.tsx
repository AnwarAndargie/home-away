import Categories from "@/components/home/Categories";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import React from "react";

function HomePage({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) {
  console.log(searchParams);
  return (
    <section>
      <Categories
        category={searchParams.category}
        search={searchParams.search}
      />
      <PropertiesContainer
        category={searchParams.category}
        search={searchParams.search}
      />
    </section>
  );
}

export default HomePage;
