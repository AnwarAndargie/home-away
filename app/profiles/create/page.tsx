import React from "react";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/lib/actions";
function CreateProfile() {
  return (
    <section>
      <div className="">
        <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>

        <FormContainer action={createProfileAction}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="Username" />
          </div>

          <SubmitButton text="Create Profile" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfile;
