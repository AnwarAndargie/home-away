import React from "react";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import SubmitButton from "../form/SubmitButton";
import ImageInput from "../form/ImageInput";
import CategorySelect from "../form/CategorySelect";
import CountrySelect from "../form/CountrySelect";

function GeneralInfo() {
  return (
    <section>
      <div className="border p-6">
        <h1>General Info</h1>
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="Name (20 limit)" type="text" />
          <FormInput label="Tagline (30 limit)" type="text" />
          <FormInput label="Price($)" type="text" />
          <CategorySelect />
          <FormInput label="Description (10-100 words)" type="text" />
          <CountrySelect />
          <ImageInput />
        </div>
      </div>
    </section>
  );
}

export default GeneralInfo;
