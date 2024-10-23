import React from "react";
import { CardSignIn } from "../form/SubmitButton";
import { auth } from "@clerk/nextjs/server";
import FavoritesForm from "./FavoritesForm";
import { fetchFavorite } from "@/lib/actions";

async function FavoritesButton({ propertyId }: { propertyId: string }) {
  const favoriteId = await fetchFavorite({ propertyId });
  const { userId } = auth();
  if (!userId) return <CardSignIn />;

  return <FavoritesForm favoriteId={favoriteId} propertyId={propertyId} />;
}

export default FavoritesButton;
