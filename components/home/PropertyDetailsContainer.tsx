import React from "react";
import { fetchSingleProperty, fetchFavorite } from "@/lib/actions";
import PropertyDetails from "./PropertyDetails";
import { auth } from "@clerk/nextjs/server";
import { CardSignIn } from "../form/SubmitButton";

async function PropertyDetailsContainer({
  propertyId,
}: {
  propertyId: string;
}) {
  const property = await fetchSingleProperty({ propertyId });
  return (
    <section>
      <PropertyDetails property={property} />
    </section>
  );
}

export default PropertyDetailsContainer;
