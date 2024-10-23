"use client";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

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

export const CardSignIn = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmit = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="p-2 cursor-pointer bg-black"
      size="icon"
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 w-4 h-4 animate-spin" />
        </>
      ) : isFavorite ? (
        <FaHeart className="" />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};
