'use client'
import {Button} from "@/components/ui/button";
import {Heart, ShoppingBag} from "lucide-react";
import {useCart} from "@/hooks/use-cart";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const NavbarActions = () => {
  const cart = useCart();
  const router = useRouter();

  return (
    <div className="flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2" onClick={()=>router.push("/cart")}>
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions;