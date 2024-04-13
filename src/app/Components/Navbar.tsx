"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import mockRouter from 'next-router-mock';

import React from "react";
import { github } from "../utils/icon";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import { SearchDialog } from "./SearchDialog/SearchDialog";

export const Navbar = () => {
    const router = useRouter();
  return (
    <div className="w-full py-4 flex  item-center  justify-between ">
        <div className="left">Hello </div>
        <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit ">

          <SearchDialog/>

          <div className="flex btn-group items-center gap-2">
          <ThemeDropdown/>

<Button
    className="source-code-btn flex items-center gap-2"
    onClick={() => {
      router.push("https://github.com/");
    }}
  >
    {github} Source Code
  </Button> 
          </div>

         
        </div>


    </div>
  )
}
