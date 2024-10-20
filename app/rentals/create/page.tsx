import React from "react";
import GeneralInfo from "@/components/properties/GeneralInfo";
import AccomodationDetails from "@/components/properties/AccomodationDetails";
import Amenities from "@/components/properties/Amenities";
import FormContainer from "@/components/form/FormContainer";
import { createRentalsAction } from "@/lib/actions";
import SubmitButton from "@/components/form/SubmitButton";

function CreateRentals() {
  return (
    <div className="border-2 p-4 rounded-md">
      <FormContainer action={createRentalsAction}>
        <GeneralInfo />
        <AccomodationDetails />
        <Amenities />
        <SubmitButton text="Create Rentals" className="mt-16" />
      </FormContainer>
    </div>
  );
}

export default CreateRentals;
