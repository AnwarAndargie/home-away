"use client";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";

type submitBtn = {
  className?: string;
  text?: string;
};

function SubmitButton({ className = " ", text = "submit" }: submitBtn) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size="lg"
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 w-4 h-4 animate-spin" />
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default SubmitButton;
