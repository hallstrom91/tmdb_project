import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { IoHomeOutline } from "react-icons/io5"; /* <IoHomeOutline /> */
import { TfiMenuAlt } from "react-icons/tfi"; /* <TfiMenuAlt /> */
import { BiMoviePlay } from "react-icons/bi"; /* <BiMoviePlay /> */
import { BiSearch } from "react-icons/bi"; /* <BiSearch /> */
import { FaTv } from "react-icons/fa"; /* <FaTv /> */
import { IoIosContact } from "react-icons/io"; /* <IoIosContact /> */

export default function Navbar() {
  const [IsOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!IsOpen);

  return (
    <>
      <header className="bg-neutral-300 border-b-2 border-b-indigo-900">
        <div className="flex justify-end p-4">{/* Search INPUT? */}</div>
        <nav className="w-full shadow">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-3xl font-semibold pl-4 text-black">
                  VSVS.se
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-black text-xl outline-none"
                  onClick={() => setIsOpen(!IsOpen)}
                >
                  <TfiMenuAlt />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center items-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
                IsOpen ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-14 md:space-y-0">
                <li className="text-black hover:text-sky-950">
                  <IoHomeOutline className="inline-block m-3" />
                  <Link
                    to="/"
                    onClick={handleClick}
                    className="transition duration-200 ease-in hover:text-xl hover:underline"
                  >
                    Hem
                  </Link>
                </li>
                <li className="text-black hover:text-sky-950">
                  <BiMoviePlay className="inline-block m-3" />
                  <Link
                    to="/movies"
                    onClick={handleClick}
                    className="transition duration-200 ease-in hover:text-xl hover:underline"
                  >
                    Filmer
                  </Link>
                </li>
                <li className="text-black hover:text-sky-950">
                  <FaTv className="inline-block m-3" />
                  <Link
                    to="#"
                    onClick={handleClick}
                    className="transition duration-200 ease-in hover:text-xl hover:underline"
                  >
                    Serier
                  </Link>
                </li>
                <li className="text-black hover:text-sky-950">
                  <IoIosContact className="inline-block m-3" />
                  <Link
                    to="#"
                    onClick={handleClick}
                    className="transition duration-200 ease-in hover:text-xl hover:underline"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
