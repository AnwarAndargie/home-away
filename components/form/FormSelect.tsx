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
type selectType = {
  type: String;
  value: String[];
};
function FormSelect(props: selectType) {
  return (
    <div>
      <Select />
    </div>
  );
}

export default FormSelect;
