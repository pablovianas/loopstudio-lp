import { alata } from "@/utils/fonts";
import Image from "next/image";
import logo from "@/images/logo.png";
import twitterLogo from '@/images/icon-twitter.svg'
import facebookLogo from '@/images/icon-facebook.svg'
import pinterestLogo from '@/images/icon-pinterest.svg'
import instagramLogo from '@/images/icon-instagram.svg'


export const Footer = () => {
    return (
        <footer className="w-full bg-[#000] p-8">
            <div
                className={`md:p-4 2xl:p-8 2xl:flex-col max-w-[1280px] mx-auto flex justify-between items-center `}
            >
                <div className="xl:flex-col 2xl:justify-center w-full flex flex-col justify-between gap-6">
                    <Image
                        className="md:mt-14 xl:self-center self-start"
                        src={logo}
                        alt="loopstudios logo"
                    />
                    <nav>
                        <ul
                            className={`md:flex-col md:items-center md:mt-8 md:gap-4 md:text-[15px] md:mb-12 2xl:justify-center flex gap-8 text-[#fff] ${alata.className}`}
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
                <div className="2xl:mt-4 xl:gap-4 w-full flex flex-col justify-center items-center gap-4">
                    <ul className="md:mb-4 2xl:justify-center w-full flex gap-2 items-center justify-end">
                        <li className="">
                            <a
                                className="w-full block p-2 border-b-2 border-transparent hover:border-white"
                                href="#"
                            >
                                <Image src={facebookLogo} alt="facebook logo" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-full block p-2 border-b-2 border-transparent hover:border-white"
                                href="#"
                            >
                                <Image src={twitterLogo} alt="twitter logo" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-full block p-2 border-b-2 border-transparent hover:border-white"
                                href="#"
                            >
                                <Image
                                    src={pinterestLogo}
                                    alt="pinterest logo"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                className="w-full block p-2 border-b-2 border-transparent hover:border-white"
                                href="#"
                            >
                                <Image
                                    src={instagramLogo}
                                    alt="instagram logo"
                                />
                            </a>
                        </li>
                    </ul>

                    <p
                        className={`2xl:text-center w-full text-end text-[#fff] opacity-[0.5] ${alata.className}`}
                    >
                        © 2021 Loopstudios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
