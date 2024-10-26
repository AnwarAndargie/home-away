import React from "react";
import { propertyDetailType } from "@/lib/properties";
import { FaCheckSquare, FaRegCheckCircle } from "react-icons/fa";

function PropertyOffers({ property }: { property: propertyDetailType }) {
  const { name, amenities } = property;
  const amenityList = JSON.parse(amenities);
  // console.log(amenityList);
  return (
    <div>
      <h1 className="text-xl font-bold mb-3">What this place offers</h1>
      <div className="grid grid-cols-2 items-center gap-2">
        {amenityList.map((item: any) => {
          if (item.selected === true) {
            return (
              <div>
                <p className="flex flex-row items-center gap-2">
                  <FaRegCheckCircle className="w-6 h-6 text-primary" />{" "}
                  {item.name}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default PropertyOffers;
