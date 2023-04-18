import { menuItemsConfig } from "./menuItemsConfig";
import MenuItems from "./MenuItems";

const Navbar = ({ handleScrolling }) => {
  return (
    <nav className="flex justify-center items-center h-full">
      <ul className="menus justify-center items-center h-full">
        {" "}
        {menuItemsConfig.map((menu, index) => {
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
