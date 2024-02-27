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
        <MainNav data={categories}/>

        <Link className="w-24" href="/">
          <Logo />
        </Link>

        <NavbarActions />
      </div>
    </div>
  );
};
export default Navbar;
