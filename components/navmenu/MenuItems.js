import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.addEventListener("click", handler);
    };
  }, [dropdown]);

  return (
    <li
      className="menu-items text-[#0E7196] font-[550] whitespace-nowrap flex items-center h-full"
      ref={ref}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <span className={items.navTitle ? "text-[21px]" : "text-[19px]"}>
              {items.title || items.navTitle}{" "}
            </span>
            {depthLevel > 0 ? (
              <span> &raquo; </span>
            ) : (
              <span className="arrow" />
            )}{" "}
          </button>{" "}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />{" "}
        </>
      ) : (
        <Link
          href="/#"
          className={items.navTitle ? "text-[21x]" : "text-[19px]"}
        >
          {items.title || items.navTitle}
        </Link>
      )}{" "}
    </li>
  );
};

export default MenuItems;
