"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { deleteSingleProperty } from "@/lib/actions";

function RemoveProperty({ propertyId }: { propertyId: string }) {
  const pathname = usePathname();
  const deleteAction = async () => {
    await deleteSingleProperty({ propertyId, pathname });
  };

  return (
    <section>
      <Button onClick={deleteAction}>Remove Home</Button>
    </section>
  );
}

export default RemoveProperty;
