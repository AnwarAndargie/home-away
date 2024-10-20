import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { category } from "@/lib/categories";

function CategorySelect() {
  return (
    <div>
      <h1 className="font-semibold ">Categories</h1>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a catgeory" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {category.map((cat) => {
              return (
                <div>
                  <SelectItem value={cat.name}>
                    <p className="capitalize">{cat.name}</p>
                  </SelectItem>
                </div>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategorySelect;
