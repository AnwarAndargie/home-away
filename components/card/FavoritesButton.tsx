import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { CardSignIn } from "../form/SubmitButton";
import { auth } from "@clerk/nextjs/server";

function FavoritesButton() {
  const { userId } = auth();
  if (!userId) return <CardSignIn />;

  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}

export default FavoritesButton;
