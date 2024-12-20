"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

//components
import ThemeToggle from "./ThemeToggle";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/resume",
  },  
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] dark:text-accent-dark text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Título accesible */}
        <DialogTitle className="sr-only">Menú móvil</DialogTitle>

        <div className="py-3">
          <ThemeToggle />
        </div>

        {/* Logo */}
        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Veronica<span className="text-accent dark:text-accent-dark">.</span>
            </h1>
          </Link>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent dark:text-accent-dark dark:border-accent-dark"
                    : "hover:text-accent dark:hover:text-accent-dark"
                } text-xl capitalize hover:text-accent dark:hover:text-accent-dark transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
