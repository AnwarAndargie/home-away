"use client";
import React from "react";
import { SignOutButton } from "@clerk/nextjs";

import { useToast } from "@/hooks/use-toast";

function SignOutLink() {
  const { toast } = useToast();
  const handleClick = () => {
    toast({ description: "You are logged out" });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleClick}>
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
