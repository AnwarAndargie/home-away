import React from "react";
import GeneralInfo from "@/components/properties/GeneralInfo";
import Amenities from "@/components/properties/Amenities";
import FormContainer from "@/components/form/FormContainer";
import { createRentalsAction } from "@/lib/actions";
import SubmitButton from "@/components/form/SubmitButton";
import DetailsButton from "@/components/properties/DetailsButton";
function CreateRentals() {
  return (
    <div className="border-2 p-4 rounded-md">
      <h1 className="text-xl font-semibold mb-4">Create Rental</h1>
      <FormContainer action={createRentalsAction}>
        <GeneralInfo />
        <div className="mt-4 ">
          <h1 className="font-semibold mb-2">Accomodation Details</h1>
          <DetailsButton details="guests" />
          <DetailsButton details="bedroom" />
          <DetailsButton details="bed" />
          <DetailsButton details="bath" />
        </div>

        <Amenities />
        <SubmitButton text="Create Rentals" className="mt-16" />
      </FormContainer>
    </div>
  );
}

export default CreateRentals;
