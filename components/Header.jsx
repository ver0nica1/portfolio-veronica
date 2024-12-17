import Link from "next/link";
import { Button } from "./ui/button";  

//components
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="py-8 xl:py-7 dark:text-white">
        <div className="container mx-auto flex justify-between items-center dark:bg-[#1a2747b3]/40 bg-[#C8B6F8]/40 p-4 rounded-2xl">

            {/* logo */}
            <Link href="/">
                <h1 className="text-4x1 font-semibold ml-10">
                    Veronica<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* desktop navbar and hire me button */}
            <div className="flex justify-center">                
                <Nav />
                {/* <Link href="/contact">
                <Button>Contact</Button>
                </Link> */}
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                mobile nav
            </div>

            {/* Dark/Light */}
            <div className="flex justify-end">
                <ThemeToggle />
            </div>
            

        </div>
    </header>
  );
};

export default Header;