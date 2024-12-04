import React from "react";
import { fetchProperties } from "@/lib/actions";
import EmptyList from "./EmptyList";
import PropertyList from "./PropertyList";

async function PropertiesContainer({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) {
  try {
    const properties = await fetchProperties({ category, search });

    if (properties.length === 0) {
      return (
        <section className="mt-4">
          <EmptyList />
        </section>
      );
    }
    return <PropertyList properties={properties} />;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return (
      <section className="mt-4">
        <p className="text-red-500">
          Failed to load properties. Please try again later.
        </p>
      </section>
    );
  }
}

export default PropertiesContainer;
