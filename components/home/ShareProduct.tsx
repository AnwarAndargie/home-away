import React from "react";
import { FiShare2 } from "react-icons/fi";
import { Button } from "../ui/button";
import { FaXTwitter, FaLinkedin, FaMessage } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

function ShareProduct() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button size="icon" variant="outline" className="p-2">
            {" "}
            <FiShare2 className="w-6 h-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="center" className="w-32">
          <div className="flex flex-row justify-between">
            <div>
              <Link href="">
                {" "}
                <FaXTwitter className="w-6 h-6 text-sky-600" />
              </Link>
            </div>
            <div>
              <Link href="">
                {" "}
                <FaLinkedin className="w-6 h-6 text-sky-600" />
              </Link>
            </div>
            <div>
              <Link href="">
                <FaMessage className="w-6 h-6 text-sky-600" />
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ShareProduct;
