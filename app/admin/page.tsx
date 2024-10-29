import { redirect } from "next/navigation";

import { clerkClient } from "@clerk/nextjs/server";
import { setRole, removeRole } from "@/lib/actions";
import { SearchUsers } from "@/components/admin/SearchUsers";
import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/SubmitButton";
import FormInputAdmin from "@/components/admin/FormInputAdmin";
import { checkRole } from "@/utils/roles";
export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  // if (!checkRole("admin")) {
  //   redirect("/");
  // }

  const query = params.searchParams.search;

  // const users = query
  //   ? (await clerkClient().users.getUserList({ query })).data
  //   : [];

  const users = await clerkClient.users.getUserList();

  return (
    <>
      <p className="text-2xl font-semibold">
        This is the protected admin dashboard restricted to users with the Admin
        role.
      </p>

      {/* <SearchUsers /> */}

      {users.data.map((user) => {
        if (user.publicMetadata.role !== "admin")
          return (
            <div
              key={user.id}
              className="flex flex-row justify-between mt-4 items-center"
            >
              <div>
                {user.firstName} {user.lastName}
              </div>

              <div>
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                  )?.emailAddress
                }
              </div>

              <div>{user.publicMetadata.role as string}</div>

              <FormContainer action={setRole}>
                <FormInputAdmin name="id" value={user.id} />
                <FormInputAdmin value="admin" name="role" />
                <SubmitButton text="Make Admin" />
              </FormContainer>
              <FormContainer action={setRole}>
                <FormInputAdmin name="id" value={user.id} />
                <FormInputAdmin value="moderator" name="role" />
                <SubmitButton text="Make Moderator" />
              </FormContainer>
              <FormContainer action={removeRole}>
                <FormInputAdmin name="id" value={user.id} />
                <SubmitButton text="Remove Role" />
              </FormContainer>
            </div>
          );
      })}
    </>
  );
}
