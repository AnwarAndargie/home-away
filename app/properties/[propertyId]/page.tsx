import React from "react";
import PropertyDetailsContainer from "@/components/home/PropertyDetailsContainer";

function page({ params }: { params: { propertyId: string } }) {
  console.log(params.propertyId);
  return (
    <section>
      <PropertyDetailsContainer propertyId={params.propertyId} />
    </section>
  );
}

export default page;
