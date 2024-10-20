"use client";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
type btnSize = "sm" | "lg" | "default";
type submitBtn = {
  className?: string;
  text?: string;
  size?: btnSize;
};

function SubmitButton({
  className = " ",
  text = "submit",
  size = "lg",
}: submitBtn) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
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
