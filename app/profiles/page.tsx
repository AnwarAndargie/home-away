import React from "react";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import FormContainer from "@/components/form/FormContainer";
import { updateProfileAction } from "@/lib/actions";
import { currentUser } from "@clerk/nextjs/server";

import { fetchProfile } from "@/lib/actions";
async function ProfilesPage() {
  const profile = await fetchProfile();

  return (
    <section>
      <div className="">
        <h1 className="text-2xl font-semibold mb-8 capitalize">
          Update Your Profile
        </h1>

        <FormContainer action={updateProfileAction}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput
              type="text"
              name="firstName"
              label="First Name"
              defaultValue={profile?.firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Last Name"
              defaultValue={profile?.lastName}
            />
            <FormInput
              type="text"
              name="username"
              label="Username"
              defaultValue={profile?.username}
            />
          </div>

          <SubmitButton text="Update Profile" />
        </FormContainer>
      </div>
    </section>
  );
}

export default ProfilesPage;
