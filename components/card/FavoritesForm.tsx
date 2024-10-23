"use client";
import React from "react";
import FormContainer from "../form/FormContainer";
import { usePathname } from "next/navigation";
import { CardSubmit } from "../form/SubmitButton";
import { toggleFavoriteAction } from "@/lib/actions";

function FavoritesForm({
  propertyId,
  favoriteId,
}: {
  propertyId: string;
  favoriteId: string | undefined;
}) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <section>
      <FormContainer action={toggleAction}>
        <CardSubmit isFavorite={favoriteId ? true : false} />
      </FormContainer>
    </section>
  );
}

export default FavoritesForm;
