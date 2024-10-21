import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function EmptyList({
  message = "Correct your filters",
  heading = "No filters",
  btnText = "Back Home",
}: {
  message?: string;
  heading?: string;
  btnText?: string;
}) {
  return (
    <section>
      <div className="mt-4">
        <h1 className="text-xl font-bold">{heading}</h1>
        <p className="text-lg">{message}</p>
        <Button asChild size="lg" className="mt-4 capitalize">
          <Link href="/">{btnText}</Link>
        </Button>
      </div>
    </section>
  );
}

export default EmptyList;
