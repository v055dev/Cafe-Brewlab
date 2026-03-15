"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import menuData from "./menuData";

const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center bg-[#3b2a1a] shadow-lg">

      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">

          {/* Logo */}
          <div className="w-60 px-4">
            <Link
              href="/"
              className="block py-4"
            >
              <Image
                src="/images/logo/brewlab-white.svg"
                alt="BrewLab Café"
                width={160}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center justify-between px-4">

            {/* Mobile Menu Button */}
            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] lg:hidden"
            >
              <span
                className={`block h-0.5 w-[30px] bg-white my-1.5 transition ${
                  navbarOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-[30px] bg-white my-1.5 transition ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-[30px] bg-white my-1.5 transition ${
                  navbarOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              />
            </button>

            {/* Navbar */}
            <nav
              className={`absolute right-4 top-full w-[250px] rounded bg-[#f5e6d3] p-6 shadow-lg transition lg:static lg:w-auto lg:bg-transparent lg:p-0 lg:shadow-none ${
                navbarOpen ? "block" : "hidden lg:block"
              }`}
            >
              <ul className="block lg:flex lg:space-x-10">

                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">

                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`block py-2 text-base transition-colors lg:py-6 ${
                          pathname === menuItem.path ||
                          menuItem.submenu?.some((item) => item.path === pathname)
                            ? "text-[#d6a77a]"
                            : "text-white hover:text-[#d6a77a]"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex cursor-pointer items-center justify-between py-2 text-base text-white hover:text-[#d6a77a] lg:py-6"
                        >
                          {menuItem.title}

                          <span className="pl-3">
                            <svg width="25" height="24" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>

                        <div
                          className={`rounded bg-[#f5e6d3] lg:absolute lg:top-[110%] lg:w-[220px] lg:p-4 lg:shadow-lg ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <Link
                            key={subIndex}
                           href={submenuItem.path}
                          className={`block py-2 text-sm rounded-md px-2 transition-colors
                         ${
                         pathname === submenuItem.path
                          ? "bg-[#6f4e37] text-white"
                         : "text-[#3b2a1a] hover:bg-[#ead7c3]"
                         }
                        `}
                         >
                          {submenuItem.title}
                          </Link>
                        ))}

                        </div>
                      </>
                    )}

                  </li>
                ))}

              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
