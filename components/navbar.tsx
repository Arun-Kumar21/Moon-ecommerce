import Link from "next/link";
import getCategories from "@/action/get-categories";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-action";
import Logo from "@/components/logo";
const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b bg-white">
      <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={"/"} className="flex lg:ml-0 ml-0 gap-x-2 max-w-28">
          <Logo />
        </Link>

        <MainNav data={categories}/>
        <NavbarActions />
      </div>
    </div>
  );
};
export default Navbar;
