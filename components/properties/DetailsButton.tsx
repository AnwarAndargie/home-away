"use client";
import React, { useState } from "react";
import { Card, CardHeader } from "../ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
function DetailsButton({
  details,
  defaultValue,
}: {
  details: string;
  defaultValue?: number;
}) {
  const [count, setCount] = useState(defaultValue || 0);

  const increseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreseCount = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };
  return (
    <Card className="mb-4">
      <input type="hidden" name={details} value={count} />
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="font-medium capitalize">{details}</h2>
            <p className="text-muted-foreground text-sm">
              Specify the number of {details}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              type="button"
              size="icon"
              onClick={decreseCount}
            >
              <LuMinus className="w-5 h-5 text-primary" />
            </Button>
            <span>{count}</span>
            <Button
              variant="outline"
              type="button"
              size="icon"
              onClick={increseCount}
            >
              <LuPlus className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default DetailsButton;
