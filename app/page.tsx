import LoadingCards from "@/components/card/LoadingCards";
import Categories from "@/components/home/Categories";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import React from "react";
import { Suspense } from "react";
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
      <Suspense fallback={<LoadingCards />}>
        {" "}
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>
    </section>
  );
}

export default HomePage;
