import React from "react";
import { fetchProperties } from "@/lib/actions";
import EmptyList from "./EmptyList";
import { categoryList } from "@/lib/categories";
import PropertyList from "./PropertyList";

async function PropertiesContainer({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) {
  //console.log(category);
  const properties = await fetchProperties({ category, search });
  //console.log(properties);

  if (properties.length === 0) {
    return (
      <section className="mt-4">
        <EmptyList />
      </section>
    );
  }
  return <PropertyList properties={properties} />;
}

export default PropertiesContainer;
