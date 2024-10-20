import React from "react";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import SubmitButton from "../form/SubmitButton";
import ImageInput from "../form/ImageInput";
import CategorySelect from "../form/CategorySelect";
import CountrySelect from "../form/CountrySelect";
import PriceInput from "../form/priceInput";
import TextInput from "../form/TextInput";

function GeneralInfo() {
  return (
    <section>
      <div className="border p-6">
        <h1>General Info</h1>
        <div className="grid grid-cols-2 gap-4">
          <FormInput name="name" label="Name (20 limit)" type="text" />
          <FormInput name="tagline" label="Tagline (30 limit)" type="text" />
          <PriceInput />
          <CategorySelect />
          <TextInput
            name="description"
            textLable="Description (10-100 words)"
          />
          <CountrySelect />
          <ImageInput />
        </div>
      </div>
    </section>
  );
}

export default GeneralInfo;
