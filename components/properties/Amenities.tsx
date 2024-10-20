import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { amenties } from "@/lib/amenities";

function Amenities() {
  return (
    <div className="flex flex-col space-y-3 mt-10">
      <h1 className="font-semibold text-xl">Amenities</h1>
      {amenties.map((amenity) => {
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor={amenity}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {amenity}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Amenities;
