import {Button} from "@/components/ui/button";
import {Heart, ShoppingBag} from "lucide-react";

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-x-4">
     <div>
       <Heart size={20} className={"hover:scale-110 hover:text-pink-500 transition"}/>
     </div>

      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          0
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions;