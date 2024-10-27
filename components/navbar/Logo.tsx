import { Button } from "../ui/button";
import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { FaAirbnb } from "react-icons/fa";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaAirbnb className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
