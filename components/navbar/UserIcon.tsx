import React from "react";
import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/lib/actions";

async function UserIcon() {
  const profile = await fetchProfileImage();
  if (profile) {
    return (
      <img
        src={profile}
        alt="profile image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
