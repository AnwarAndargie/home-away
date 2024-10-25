import React from "react";
import PropertyCard from "@/components/card/PropertyCard";
import PropertyList from "@/components/home/PropertyList";
import EmptyList from "@/components/home/EmptyList";
import { fetchUserFavorite } from "@/lib/actions";
async function FavoritesPage() {
  const favorites = await fetchUserFavorite();
  if (favorites?.length === 0 || !favorites) {
    return (
      <EmptyList
        message="Go Home and select your favorite"
        btnText="Make Favorites"
        heading="No Favorites"
      />
    );
  }
  console.log(favorites);
  return (
    <section>
      <PropertyList properties={favorites} />
    </section>
  );
}

export default FavoritesPage;
