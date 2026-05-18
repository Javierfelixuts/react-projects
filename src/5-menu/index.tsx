import MenuCaterogies from "./components/MenuCaterogies";
import "./style.css";
import menuData from "./data";
import { MenuItem } from "./components/MenuItem";
import type { IMenu } from "./interfaces/Imenu";
import { useState } from "react";

const MenuApp = () => {
  const [dataMenu, setDataMenu] = useState(menuData)
  const onFilterCategory = (category: string) => {
    console.log("category: ", category);
    if(category == "all") {
      setDataMenu(menuData)
    }else{
      const menuFiltered = menuData.filter(menu => category === menu.category);
      setDataMenu(menuFiltered)
    }
  }
  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Our Menu</h1>

      <MenuCaterogies onFilterCategory={onFilterCategory}/>
      <div className="mt-10 p-4 grid grid-cols-1 gap-5 md:grid-cols-2 justify-center">
        {dataMenu.map((menu: IMenu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
    </main>
  );
};

export default MenuApp;
