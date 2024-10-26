import React from "react";
import { propertyDetailType } from "@/lib/properties";

function Description({ property }: { property: propertyDetailType }) {
  const { name, imageUrl, price, description } = property;
  return (
    <section className="mt-6 col-span-1">
      <h1 className="font-bold text-xl">Description</h1>
      <p className="text-muted-foreground text-md">{description}</p>
    </section>
  );
}

export default Description;
