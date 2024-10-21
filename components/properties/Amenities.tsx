"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { amenities } from "@/lib/amenities";
import { IconType } from "react-icons/lib";

type AmenityType = {
  name: string;
  icon: IconType;
  selected: boolean;
};

function Amenities() {
  const [selectedAmenities, setSelectedAmenities] =
    useState<AmenityType[]>(amenities);

  const handleChecked = (amenity: AmenityType) => {
    setSelectedAmenities((prev) =>
      prev.map((a) =>
        a.name === amenity.name ? { ...a, selected: !a.selected } : a
      )
    );
  };

  return (
    <section className="mt-10">
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <h1 className="font-semibold text-xl mb-4">Amenities</h1>
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => (
          <div key={amenity.name} className="flex items-center space-x-2">
            <Checkbox
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => handleChecked(amenity)}
            />
            <label
              htmlFor={amenity.name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span className="flex items-center gap-2">
                {amenity.name} <amenity.icon />
              </span>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;
