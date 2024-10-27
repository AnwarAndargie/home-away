import React from "react";
import { propertyDetailType } from "@/lib/properties";
import Image from "next/image";

import { Button } from "../ui/button";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FavoritesButton from "../card/FavoritesButton";
import ShareProduct from "./ShareProduct";
function PropertyDetails({ property }: { property: propertyDetailType }) {
  const { name, imageUrl, price } = property;
  const { country, id: propertyId, tagline } = property;
  const { category, description, bed, bedroom, guests, bath } = property;

  return (
    <section>
      <div>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-xl">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl capitalize">
                  {category} in {country}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-row justify-between mt-4 mb-4">
            <h1 className="text-3xl font-bold capitalize mb-2">{tagline}</h1>
            <div className="flex flex-row items-center space-x-8">
              <ShareProduct propertyId={propertyId} name={name} />
              <FavoritesButton propertyId={propertyId} />
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-md mb-2">
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width:960px) 100vw,50vw)"
              className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;
