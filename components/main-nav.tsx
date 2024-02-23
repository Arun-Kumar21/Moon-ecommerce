'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


import { cn } from "@/lib/utils";
import {Category} from "@/type";

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
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-bold transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-400"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
