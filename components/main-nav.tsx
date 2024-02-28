'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


import { cn } from "@/lib/utils";
import {Category} from "@/type";
import {ChevronRight} from "lucide-react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  return (
    <div className="sm:mx-6 flex flex-col gap-y-4 sm:flex-row items-center  sm:space-x-4 md:space-x-6 w-full">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "sm:text-sm transition-colors hover:text-black group font-semibold w-full text-xl flex justify-between",
            route.active ? "text-black" : "text-neutral-400"
          )}
        >
          <p>{route.label}</p>
          <ChevronRight className="sm:hidden"/>
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
