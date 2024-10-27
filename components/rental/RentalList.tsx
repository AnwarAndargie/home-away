import React from "react";
import { propertyCardType } from "@/lib/properties";
import PropertyCard from "../card/PropertyCard";
import RemoveProperty from "./RemoveProperty";

function RentalList({ properties }: { properties: propertyCardType[] }) {
  return (
    <section className="mt-4 gap-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => {
        return (
          <>
            <div className="flex flex-col gap-y-2">
              <PropertyCard key={property.id} property={property} />
              <RemoveProperty propertyId={property.id} />
            </div>
          </>
        );
      })}
    </section>
  );
}

export default RentalList;
