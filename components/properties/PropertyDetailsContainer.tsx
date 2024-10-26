import React from "react";
import { fetchSingleProperty, fetchFavorite } from "@/lib/actions";
import PropertyDetails from "./PropertyDetails";
import RenterHomeInfo from "./RenterHomeInfo";
import Description from "./Description";
import CalendarSelect from "./CalendarSelect";
import PropertyOffers from "./PropertyOffers";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";
const DynamicMap = dynamic(() => import("./PropertyMap"), {
  ssr: false,
  loading: () => <Skeleton className="h-[400px] w-full" />,
});

async function PropertyDetailsContainer({
  propertyId,
}: {
  propertyId: string;
}) {
  const property = await fetchSingleProperty({ propertyId });
  return (
    <section>
      <PropertyDetails property={property} />
      <div className="flex flex-row gap-4 mt-10">
        <div className="flex flex-col space-y-5">
          <RenterHomeInfo property={property} />
          <Description property={property} />
          <PropertyOffers property={property} />
          <DynamicMap countryCode={property.country} />
        </div>
        <div className="w-2/3">
          <CalendarSelect />
        </div>
      </div>
    </section>
  );
}

export default PropertyDetailsContainer;
