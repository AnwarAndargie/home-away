"use client";
import React from "react";
import { FiShare2 } from "react-icons/fi";
import { Button } from "../ui/button";
import { FaXTwitter, FaLinkedin, FaMessage } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import Link from "next/link";

function ShareProduct({
  propertyId,
  name,
}: {
  propertyId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/properties/${propertyId}`;
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
          <div className="flex flex-row items-center justify-center gap-x-2">
            <TwitterShareButton url={shareLink} name={name}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareLink} name={name}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton url={shareLink} name={name}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ShareProduct;
