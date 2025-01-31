"use client";
import { useState } from "react";
import LinkBtn from "../../../components/link-btn";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const HeaderSection = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    window.location.replace(selectedLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { logo, header_menu, logoLink } = props.props.content;

  const firstMenuItems = header_menu.slice(0, 3);
  const secondMenuItems = header_menu.slice(3, 5);

  return (
    <nav className="flex  items-center bg-white border-gray-200">
      <div className="flex-nowrap flex-row-reverse max-w-screen-xl flex  items-center justify-between mx-auto p-4">
        {/* Hamburgermeny-knapp */}
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-16 h-16 justify-center text-sm rounded-lg md:hidden focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-[200px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu for larger screens */}
        <div
          className="flex items-center w-full justify-between md:justify-center"
          id="navbar-default"
        >
          {/* Första menyn */}
          <ul className="hidden md:flex md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {firstMenuItems.map((element: any, i: number) => (
              <li key={i}>
                {
                  <LinkBtn
                    className={"font-bold text-lg headerLink"}
                    link={`${element.link?.cached_url.replace(
                      /^\/(da|en)\//,
                      "/"
                    )}`}
                    title={element.name}
                  />
                }
              </li>
            ))}
          </ul>

          {/* Logotyp */}

          <LinkBtn
            link={`/${logoLink.cached_url || ""}`}
            className="flex items-center space-x-3 rtl:space-x-reverse md:pr-8 md:pl-8"
          >
            <Image
              alt={logo.name}
              height={64}
              width={129}
              src={logo.filename}
            />
          </LinkBtn>

          {/* Andra menyn */}
          <ul className="hidden md:flex md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {secondMenuItems.map((element: any, i: number) => (
              <li key={i}>
                <LinkBtn
                  className={"font-bold text-lg headerLink"}
                  link={`${element.link?.cached_url.replace(
                    /^\/(da|en)\//,
                    "/"
                  )}`}
                  title={element.name}
                />
              </li>
            ))}
          </ul>

          {/* Hamburger meny för mobil */}
          <div
            className={`fixed flex-col h-[100vh] w-full left-0 top-0 z-50 bg-white gap-5 pt-24  transition-all duration-500 right-0 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            id="mobile-menu"
          >
            <button className="fixed top-0 right-0 z-10" onClick={toggleMenu}>
              <IoMdClose
                fontSize={60}
                className="mt-[2rem] mr-[2rem] md:mt-[2rem] md:mr-[2rem]"
              />
            </button>
            <div className="flex items-center justify-center h-[62vh]">
              <ul>
                {firstMenuItems.map((element: any, i: number) => (
                  <li key={i} className={" mb-[20px]"} onClick={toggleMenu}>
                    <LinkBtn
                      className={"font-bold text-lg mb-[20px]"}
                      link={`${element.link?.cached_url.replace(
                        /^\/(da|en)\//,
                        "/"
                      )}`}
                      title={element.name}
                    />
                  </li>
                ))}
                {secondMenuItems.map((element: any, i: number) => (
                  <li key={i} className={" mb-[20px]"} onClick={toggleMenu}>
                    <LinkBtn
                      className={"font-bold text-lg"}
                      link={`${element.link?.cached_url.replace(
                        /^\/(da|en)\//,
                        "/"
                      )}`}
                      title={element.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <form className="w-[10%]">
        <select
          name="language"
          id="language-select"
          onChange={handleLangChange}
        >
          <option value="https://premierpadeltravel.se">Svenska</option>
          <option value="https://premierpadeltravel.dk">Danska</option>
          <option value="https://premierpadeltravel.com">Engelska</option>
        </select>
      </form>
    </nav>
  );
};

export default HeaderSection;
