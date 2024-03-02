import React, {useEffect, useState} from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Menu, ShoppingCart} from "lucide-react";
import MainNav from "@/components/main-nav";
import {Category} from "@/type";
import Link from "next/link";


const MobileNav = ({data} : {data : Category[]}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6"/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription className="py-4 gap-y-4 justify-between flex flex-col h-[85vh]">
              <MainNav data={data} />
              <Link href="/cart" className="w-3/4 mx-auto bg-black p-3 rounded-3xl flex items-center justify-center text-white">
                <span className="">Cart Item</span>
                <ShoppingCart className="w-5 h-5 ml-2"/>
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  );
};

export default MobileNav;