"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import NavMenu from "./NavMenu";

export default function OutlineMenu({ className }) {
  const [outlineMenu, setOutlineMenu] = useState(false);

  function handleOutlineMenu() {
    setOutlineMenu(!outlineMenu);
  }

  return (
    <div>
      <AiOutlineMenu
        className="fixed right-6 top-4 z-[99] cursor-pointer text-cyan-500 duration-200 ease-in hover:scale-110 sm:hidden"
        onClick={handleOutlineMenu}
        size={20}
      />
      {outlineMenu ? (
        <div
          className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-white/90"
          onClick={handleOutlineMenu}
        >
          <NavMenu
            className="flex flex-col items-center gap-8"
            onClick={handleOutlineMenu}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
