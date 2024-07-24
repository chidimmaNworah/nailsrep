import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiArrowDropDownFill } from "react-icons/ri";
import Image from "next/image";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { CiUser, CiSearch, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import styles from "./styles.module.scss";
import ProductList from "./ProductList";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";

export default function Header({country}) {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const dropdownRef = useRef(null);
  useEffect(() => {
    // Click event handler to detect outside clicks
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Scroll event handler to detect scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener for scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (title) => {
    setActiveLink(title);
  };

  return (
    <div className={styles.head}>
     {!scrolled && (
          <div className={styles.head_rem}>
            <p>
              Create an account to unlock free shipping in your country{" "}
              {/* <Link href="https://shop.nailsrepublik.com/signin">
                SIGN IN | SIGN UP
              </Link> */}
            </p>
          </div>
        )}
      <div className={styles.head_heading}>

      <div className="flex items-center gap-4">
              <img src={country.flag} alt="nigerian_flag" className="w-[40px]" />
              <span className={styles.countryName}>
                NG | English
              </span>
            </div>
        <div className="flex gap-2">
          <Link href="/">
            <Image
              className="relative"
              src="/nailsrepublicIcon.png"
              alt="NailsRepublic Logo"
              width={30}
              height={28}
              priority
              onClick={() => handleLinkClick("")}
            />
          </Link>
          <Link href="/">
            <h3 className="text-[#431516] font-bold text-[1.5rem]">
              NAILS <span className="font-normal">REPUBLIK</span>
            </h3>
          </Link>
        </div>

        <div className={styles.nav}>
          {/* <ul className={styles.nav_list}>
            <li
              onMouseOver={() => setVisible(true)}
              className={activeLink === "Products" ? styles.active : ""}
              title="Products"
              onClick={() => handleLinkClick("Products")}
            >
              <div />
              <div className="flex items-center">
                Products <RiArrowDropDownFill />
              </div>
              <div ref={dropdownRef}>{visible && <ProductList />}</div>
            </li>

            <li
              className={activeLink === "Shop" ? styles.active : ""}
              title="Shop"
              onClick={() => handleLinkClick("Shop")}
            >
              <div />
              <Link href="" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://shop.nailsrepublik.com"
                >
                  Shop
                </a>
              </Link>
            </li>
            <li
              className={activeLink === "Best Sellers" ? styles.active : ""}
              title="Best Sellers"
              onClick={() => handleLinkClick("Best Sellers")}
            >
              <div />
              Best Sellers
            </li>
            <li
              className={activeLink === "Blog" ? styles.active : ""}
              title="Blog"
              onClick={() => handleLinkClick("Blog")}
            >
              <div />
              Blog
            </li>
            <li
              className={activeLink === "About" ? styles.active : ""}
              title="About"
              onClick={() => handleLinkClick("About")}
            >
              <div />
              About
            </li>
          </ul>

          <div className={styles.nav_mobile}>
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <div className={styles.toggle}>
                <HiX onClick={() => setToggle(false)} />
                <ul className={styles.toggle__list}>
                  <li
                    className={activeLink === "Shop" ? styles.active : ""}
                    title="Shop"
                    onClick={() => handleLinkClick("Shop")}
                  >
                    <div />
                    <Link href="" legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://shop.nailsrepublik.com"
                      >
                        Shop
                      </a>
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "Best Sellers" ? styles.active : ""
                    }
                    title="Best Sellers"
                    onClick={() => handleLinkClick("Best Sellers")}
                  >
                    <div />
                    Best Sellers
                  </li>
                  <li
                    className={activeLink === "Blog" ? styles.active : ""}
                    title="Blog"
                    onClick={() => handleLinkClick("Blog")}
                  >
                    <div />
                    Blog
                  </li>
                  <li
                    className={activeLink === "About" ? styles.active : ""}
                    title="About"
                    onClick={() => handleLinkClick("About")}
                  >
                    <div />
                    About
                  </li>
                </ul>
              </div>
            )}
          </div> */}

          <ul className="flex items-center gap-3 text-xl hover:text-[#c9454b]">
          <Link href="https://shop.nailsrepublik.com/signin"><li className="flex items-center gap-2">
              <CiUser /> 
              {/* <span>Sign In</span> */}
              </li></Link>
              {/* <Link href="https://shop.nailsrepublik.com/search"><li className="flex items-center">
              <CiSearch />
              </li></Link> */}
              {/* <Link href="https://shop.nailsrepublik.com/signin"><li className="flex items-center">
              <CiHeart />
              </li></Link> */}
              {/* <Link href="https://shop.nailsrepublik.com/signin"><li className="flex items-center">
              <IoBagOutline />
              </li></Link> */}
          </ul>
        </div>

      </div>
      <div className={styles.head_rem2}>
            <ul className={styles.navtype}>
              <li>
              <Link href="" legacyBehavior>
              <a href="https://blog.nailsrepublik.com" target="_blank">
                Blog
                </a>
              </Link>
              </li><li>
              <Link href="" legacyBehavior>
              <a href="https://shop.nailsrepublik.com" target="_blank">
                Store
                </a>
              </Link>
              </li>
            <li>
              <Link href="https://shop.nailsrepublik.com">
                Bestsellers
              </Link>
              </li>
            <li>
              <Link href="https://shop.nailsrepublik.com">
                Tools
              </Link>
              </li>
            <li>
              <Link href="https://shop.nailsrepublik.com">
                Nailcare
              </Link>
              </li>
              <li>
              <Link href="https://shop.nailsrepublik.com">
                Nailart
              </Link>
              </li>
              <li>
              <Link href="https://shop.nailsrepublik.com">
                Jewels
              </Link>
              </li>
              <li>
              <Link href="/services/virtual">
                Virtual Services
              </Link>
              </li><li>
              <Link href="https://shop.nailsrepublik.com/profile/wishlist">
                + Save
              </Link>
              </li>
            </ul>
          </div>
    </div>
  );
}
