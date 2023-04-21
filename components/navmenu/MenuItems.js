import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { rootPage } from "./menuItemsConfig";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel, handleScrolling }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
      if (event.target.name && event.target.name === "listItem") {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
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
            data-target={items.dataTarget ? items.dataTarget : ""}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={(e) => {
              if (items.dataTarget) {
                handleScrolling(e);
              }
              setDropdown((prev) => !prev);
            }}
          >
            {items.file ? (
              <Link
                href={`${rootPage}/pdf/${items.file}`}
                rel="noopener noreferrer"
                target="_blank"
                download={false}
              >
                <span
                  className={items.navTitle ? "text-[21px]" : "text-[19px]"}
                >
                  {items.title || items.navTitle}{" "}
                </span>
                {depthLevel > 0 ? (
                  <span> &raquo; </span>
                ) : (
                  <span className="arrow" />
                )}{" "}
              </Link>
            ) : (
              <>
                <span
                  className={items.navTitle ? "text-[21px]" : "text-[19px]"}
                >
                  {items.title || items.navTitle}{" "}
                </span>
                {depthLevel > 0 ? (
                  <span> &raquo; </span>
                ) : (
                  <span className="arrow" />
                )}{" "}
              </>
            )}
          </button>{" "}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            handleScrolling={handleScrolling}
          />{" "}
        </>
      ) : (
        <button
          data-target={items.dataTarget ? items.dataTarget : ""}
          className={items.navTitle ? "text-[21x]" : "text-[19px]"}
          name="listItem"
          type="button"
          onClick={(e) => {
            if (items.dataTarget) {
              handleScrolling(e);
            }
          }}
        >
          {items.file ? (
            <Link
              href={`${rootPage}/pdf/${items.file}`}
              rel="noopener noreferrer"
              target="_blank"
              download={false}
            >
              {items.title || items.navTitle}
            </Link>
          ) : (
            <>{items.title || items.navTitle}</>
          )}
        </button>
      )}{" "}
    </li>
  );
};

export default MenuItems;
