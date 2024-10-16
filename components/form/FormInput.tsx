import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type formProps = {
  label: string;
  type: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
};

function FormInput(props: formProps) {
  const { label, type, name, placeholder, defaultValue } = props;

  return (
    <div className="mb-2">
      <Label htmlFor={label} className="capitalize">
        {label || name}
      </Label>
      <Input
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default FormInput;
