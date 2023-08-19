import Navbar from "./Navbar";
import MenuCard from "./MenuCard";
import menu from "./MenuApi";
import { useState } from "react";

const uniqueList=[...new Set(menu.map((currentElements)=>{
  return currentElements.category;
 })),'All'];

const Menu = () => {
   const [menuData,setMenuData] = useState(menu);
   const [uniqueData] = useState(uniqueList);
 
   const filterItems=(category)=>{
if(category == 'All'){
setMenuData(menu);
return;
}

const updatedData=menu.filter((currentElement)=>{
return currentElement.category == category;
})
setMenuData(updatedData);
   }
   
  return (
    <>
      <Navbar uniqueData={uniqueData} filterItems={filterItems}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Menu
