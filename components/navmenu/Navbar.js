import { menuItemsConfigEN, menuItemsConfigVN } from "./menuItemsConfig";
import MenuItems from "./MenuItems";
import { useTranslation } from "next-i18next";

const Navbar = ({ handleScrolling }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const menu = language === "vi" ? menuItemsConfigVN : menuItemsConfigEN;
  return (
    <nav className="flex justify-center items-center h-full">
      <ul className="menus justify-center items-center h-full">
        {" "}
        {menu.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              handleScrolling={handleScrolling}
            />
          );
        })}{" "}
      </ul>{" "}
    </nav>
  );
};

export default Navbar;
