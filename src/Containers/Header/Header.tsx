import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.svg";
import Button from "../../Components/Button/Button";
import { navItems } from "../../Utilities/navItems";
import user from "../../Assets/Images/user.svg";
import Dropdown from "../../Assets/SVGs/Dropdown";
import Search from "../../Assets/SVGs/Search";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import SearchContainer from "../SearchContainer/SearchContainer";
import { scrollToTop } from "../../HelperFunctions/scrollToTop";

const Header = () => {
  // States
  const [modals, setModals] = useState({
    searchModal: false,
  });

  return (
    <section className="flex items-center p-10 h-134px font-body gap-6 bg-white">
      {modals.searchModal && (
        <Modal
          onClick={() => {
            setModals((prevState) => {
              return { ...prevState, searchModal: false };
            });
          }}
          body={<SearchContainer />}
        />
      )}

      <img src={logo} alt="Go" />

      <div className="basis-60 relative">
        <input
          placeholder="Search"
          type="search"
          className="p-3 min-w-10 bg-grey-300 outline-none text-base pl-10 w-full"
          onFocus={() =>
            setModals((prevState) => {
              return { ...prevState, searchModal: true };
            })
          }
        />
        <span className="absolute left-3 top-0 bottom-0 m-auto flex items-center justify-center">
          <Search />
        </span>
      </div>

      <nav className="ml-auto pr-6 border-r-grey-200 border-r-2 flex items-center gap-6 text-center">
        {navItems.slice(0, 5).map((navItem) => {
          return (
            <Link
              to={navItem.route}
              key={navItem.title}
              className="flex flex-col items-center justify-center gap-2 "
              onClick={scrollToTop}
            >
              {navItem?.icon}
              <span className="text-base text-grey-100 font-medium hover:text-blue-300">
                {navItem?.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <Button>Subscribe</Button>

      <nav className=" flex items-center gap-6 text-center">
        {navItems.slice(5).map((navItem) => {
          return (
            <Link
              to={navItem.route}
              key={navItem.title}
              className="flex flex-col items-center justify-center gap-2 "
            >
              {navItem?.icon}
              <span className="text-base text-grey-100 font-medium hover:text-blue-300">
                {navItem?.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="flex gap-4 items-center cursor-pointer">
        <img src={user} alt="User" />
        <Dropdown />
      </div>
    </section>
  );
};

export default Header;
