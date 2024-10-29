import React from "react";
import { Input } from "@/components/ui/input";
type formProps = {
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
};

function FormInputAdmin(props: formProps) {
  const { value, name, placeholder, defaultValue } = props;

  return (
    <div className="mb-2">
      <Input
        type="hidden"
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default FormInputAdmin;
