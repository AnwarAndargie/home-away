import React from "react";
import { CardSignIn } from "../form/SubmitButton";
import { auth } from "@clerk/nextjs/server";
import FavoritesForm from "./FavoritesForm";
import { fetchFavorite } from "@/lib/actions";

async function FavoritesButton({ propertyId }: { propertyId: string }) {
  const { userId } = auth();
  if (!userId) return <CardSignIn />;
  const favoriteId = await fetchFavorite({ propertyId });

  return <FavoritesForm favoriteId={favoriteId} propertyId={propertyId} />;
}

export default FavoritesButton;
