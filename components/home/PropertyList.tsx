import React from "react";
import { propertyCardType } from "@/lib/properties";
import PropertyCard from "../card/PropertyCard";
function PropertyList({ properties }: { properties: propertyCardType[] }) {
  return (
    <section className="mt-4 gap-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => {
        return <PropertyCard key={property.id} property={property} />;
      })}
    </section>
  );
}

export default PropertyList;
