import React from "react";
import { fetchPersonalPoperty } from "@/lib/actions";
import RentalList from "@/components/rental/RentalList";
import EmptyList from "@/components/home/EmptyList";
async function RentalsPage() {
  const properties = await fetchPersonalPoperty();
  if (properties.length === 0) {
    return (
      <EmptyList
        message="You don't have rentals"
        btnText="Create Rentals"
        heading="No Rentals Found"
      />
    );
  }
  return (
    <section>
      <RentalList properties={properties} />
    </section>
  );
}

export default RentalsPage;
