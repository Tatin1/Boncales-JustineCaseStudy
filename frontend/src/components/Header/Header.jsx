import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/doctors",
        display: "Find a Doctor"
    },
    {
        path: "/services",
        display: "Services"
    },
    {
        path: "/contact",
        display: "Contact"
    }
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        const scrollHandler = () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("sticky_header");
            } else {
                headerRef.current.classList.remove("sticky_header");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    };

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show_menu');
    };

    useEffect(() => {
        handleStickyHeader();

        return handleStickyHeader; // Pass the function reference for cleanup
    }, []);

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    {/* Navigation */}
                    <div className="navigation" ref={menuRef}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className="text-textcolor text-[16px] leading-7 font-[600]"
                                        activeClassName="text-primaryColor"
                                        exact={true}
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation Right */}
                    <div className="flex items-center gap-4">
                        {/* User Image (Hidden on Mobile) */}
                        <div className="hidden">
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full">
                                    <img
                                        src={userImg}
                                        className="w-full rounded-full"
                                        alt=""
                                    />
                                </figure>
                            </Link>
                        </div>
                        {/* Login Button */}
                        <Link to="/login">
                            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                                Login
                            </button>
                        </Link>
                        {/* Menu Icon (Visible on Mobile) */}
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
