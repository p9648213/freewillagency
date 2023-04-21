import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { rootPage } from "./menuItemsConfig";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel, handleScrolling }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handlerClick = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
      if (event.target.name && event.target.name === "listItem") {
        setDropdown(false);
      }
    };

    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handlerClick);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("click", handlerClick);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items text-[#0E7196] font-[550] whitespace-nowrap flex items-center h-full"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        items.file ? (
          <>
            <Link
              style={{ width: "100%", height: "100%" }}
              href={`${rootPage}/pdf/${items.file}`}
              rel="noopener noreferrer"
              target="_blank"
              download={false}
            >
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
              </button>{" "}
            </Link>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              handleScrolling={handleScrolling}
            />{" "}
          </>
        ) : (
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
              handleScrolling={handleScrolling}
            />{" "}
          </>
        )
      ) : items.file ? (
        <Link
          style={{ width: "100%", height: "100%" }}
          href={`${rootPage}/pdf/${items.file}`}
          rel="noopener noreferrer"
          target="_blank"
          download={false}
        >
          <button
            data-target={items.dataTarget ? items.dataTarget : ""}
            className={items.navTitle ? "text-[21px]" : "text-[19px]"}
            name="listItem"
            type="button"
            onClick={(e) => {
              if (items.dataTarget) {
                handleScrolling(e);
              }
            }}
          >
            {items.title || items.navTitle}
          </button>
        </Link>
      ) : (
        <button
          data-target={items.dataTarget ? items.dataTarget : ""}
          className={items.navTitle ? "text-[21px]" : "text-[19px]"}
          name="listItem"
          type="button"
          onClick={(e) => {
            if (items.dataTarget) {
              handleScrolling(e);
            }
          }}
        >
          {items.title || items.navTitle}
        </button>
      )}{" "}
    </li>
  );
};

export default MenuItems;

{
  /* <Link
                href={`${rootPage}/pdf/${items.file}`}
                rel="noopener noreferrer"
                target="_blank"
                download={false}
              ></Link> */
}
