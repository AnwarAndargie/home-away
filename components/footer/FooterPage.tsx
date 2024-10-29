import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import Link from "next/link";

function FooterPage() {
  return (
    <footer className="flex flex-row justify-between items-center bg-slate-300 h-[10vh]">
      <div className="flex flex-row">
        <p>@2024 Airbnb, Inc.</p>
        <ul className="flex flex-row gap-x-2">
          <li>
            <Link href="">Terms</Link>
          </li>
          <li>
            <Link href="">Sitemap</Link>
          </li>
          <li>
            <Link href="">Privacy</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-x-3 items-center">
        <FaGlobe /> <p>English(US)</p>
        <p>$ USD</p>
        <FaFacebook className="w-6 h-6" />
        <FaTwitter className="w-6 h-6" />
        <FaInstagram className="w-6 h-6" />
      </div>
    </footer>
  );
}

export default FooterPage;
