import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryList } from "@/lib/categories";

function CategorySelect() {
  const name = "category";
  return (
    <div>
      <Label className="font-semibold mb-2" htmlFor={name}>
        Categories
      </Label>
      <Select name={name} required defaultValue={categoryList[0].name}>
        <SelectTrigger className="" id={name}>
          <SelectValue placeholder="Select a catgeory" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoryList.map((cat) => {
              return (
                <div>
                  <SelectItem value={cat.name}>
                    <span className="capitalize flex items-center gap-2">
                      {<cat.icon />}
                      {cat.name}
                    </span>
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
