import Image from "next/image";
import { alata } from '@/utils/fonts';
import logo from '@/images/logo.png'
import menuHamburgerIcon from '@/images/icon-hamburger.svg'
import menuCloseIcon from '@/images/icon-close.svg'

import { useState } from "react";


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header
            className={`w-full absolute top-0 p-8 mt-12 ${
                menuOpen ? "menu-open" : ""
            } `}
        >
            <div
                className={`max-w-[1280px] mx-auto flex justify-between items-center ${
                    menuOpen ? "menu-open flex flex-col" : ""
                }`}
            >
                <div
                    className={`w-full flex items-center justify-between ${
                        menuOpen ? "p-8" : ""
                    }`}
                >
                    <Image src={logo} alt="loopstudios" />
                    <Image
                        src={menuOpen ? menuCloseIcon : menuHamburgerIcon}
                        alt="menu"
                        onClick={toggleMenu}
                        className={`md:flex hidden cursor-pointer`}
                    />
                </div>
                <nav
                    className={`${
                        menuOpen ? "w-full h-full mt-32 p-8" : "flex"
                    }`}
                >
                    <ul
                        className={`${
                            menuOpen
                                ? "flex flex-col text-xl uppercase font-light"
                                : ""
                        }[@media(max-width:768px)]:hidden flex gap-8 text-[#fff] ${alata.className}`}
                    >
                        <li>
                            <a className="hover:border-b-2 p-2" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:border-b-2 p-2" href="#">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a className="hover:border-b-2 p-2" href="#">
                                Events
                            </a>
                        </li>
                        <li>
                            <a className="hover:border-b-2 p-2" href="#">
                                Products
                            </a>
                        </li>
                        <li>
                            <a className="hover:border-b-2 p-2" href="#">
                                Support
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}