import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoritesButton from "./FavoritesButton";
import CountryName from "./CountryName";
import FavoritesForm from "./FavoritesForm";

import PropertyRating from "./PropertyRating";
import { formatCurrency } from "@/lib/format";

import { propertyCardType } from "@/lib/properties";

function PropertyCard({ property }: { property: propertyCardType }) {
  const { name, imageUrl, price } = property;
  const { country, id: propertyId, tagline } = property;
  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] overflow-hidden rounded-md mb-2">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width:760px) 100vw,50vw)"
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-2 flex justify-between">
          <h1 className="capitalize mt-1 font-medium ">{name}</h1>
          <PropertyRating inPage={false} propertyId={propertyId} />
        </div>
        <p className="capitalize p-2 mt-1 text-muted-foreground text-sm">
          {tagline}
        </p>
        <div className="flex flex-row justify-between p-2">
          <p className="font-bold text-sm mt-1">
            {formatCurrency(price)} night
          </p>
          <p>{country}</p>
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-50">
        <FavoritesButton propertyId={propertyId} />
      </div>
    </article>
  );
}

export default PropertyCard;
