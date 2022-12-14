import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleSidebar = () => {
    if (activeMenu && screenSize < 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/** -- App Name-- */}
      {activeMenu && (
        <div className="flex justify-between items-center">
          <Link
            to="/"
            onClick={handleSidebar}
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          >
            <SiShopware /> <span>Reduction Board</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button
              type="button"
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 mt-4 block hover:bg-light-gray "
              onClick={() => setActiveMenu((prevstate) => !prevstate)}
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
      )}

      {/** --items-- */}
      <div className="mt-10 ">
        {links.map((ele) => (
          <div key={ele.title}>
            <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
              {ele.title}
            </p>
            {ele.links.map((links) => (
              <NavLink
                to={`/${links.name}`}
                key={links.name}
                onClick={handleSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : '',
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {links.icon}
                <span className="capitalize ">{links.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
