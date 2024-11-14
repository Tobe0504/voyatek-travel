import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../HelperFunctions/scrollToTop";
import { sideNavItems } from "../../Utilities/navItems";

const SideNav = () => {
  // Router
  const location = useLocation();

  return (
    <section className=" p-6 bg-white rounded-sm font-body">
      {sideNavItems.map((navItem) => {
        return (
          <Link
            to={navItem.route}
            key={navItem.title}
            className={`flex gap-2 items-center p-3 mb-3 text-base text-grey-100 font-medium hover:bg-grey-300 ${
              location.pathname === navItem?.route ? "bg-blue-200" : "bg-none"
            }`}
            onClick={scrollToTop}
          >
            {navItem.icon}
            <span>{navItem.title}</span>
          </Link>
        );
      })}

      <div className="flex gap-2 items-center py-5 px-3 bg-grey-300 mt-16">
        <span className="p-3.5 bg-blue-100 text-base text-white rounded">
          Go
        </span>
        <span className="text-grey-100 font-sm font-medium">
          Personal Account
        </span>
      </div>
    </section>
  );
};

export default SideNav;
