import Link from "next/link";
import getCategories from "@/action/get-categories";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-action";
import Logo from "@/components/logo";
import {Menu} from "lucide-react";
import MobileNav from "@/components/mobile-nav";
const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b bg-white">
      <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="hidden sm:flex">
          <MainNav data={categories}/>
        </div>

        <Link className="w-24" href="/">
          <Logo />
        </Link>

        <div className="hidden sm:flex">
          <NavbarActions />
        </div>

        <div className="flex sm:hidden">
          <MobileNav data={categories}/>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
