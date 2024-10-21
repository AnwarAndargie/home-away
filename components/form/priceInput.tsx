import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type defaultType = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: defaultType) {
  const name = "price";

  return (
    <div className="mb-2">
      
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        type="number"
        id={name}
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
