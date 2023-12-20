import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="py-4">
      <Image
        height={100}
        alt="logo"
        width={100}
        className="w-16"
        src="/logo.png"
      />
    </div>
  );
};
