import React from 'react'
import "./style.css";
import Menu from "./menuApi";
import Card from "./card";

const Resturant = () => {
    const [menuData,setMenuData] = React.useState(Menu);
    const [cat,setCat] = React.useState("All");

   const categories = [
    "All",
       ...new Set(
           Menu.map((curr) => 
           { return curr.category}
           )
       )
   ];
   
    
    
  return (
    <>
        <nav className="navbar">
            <div className="btn-group">
           { categories.map((curElem) =>{
               return (<button className="btn-group__item" onClick={() =>  setCat(curElem) }>{curElem}</button>);
            })}
            </div>
        </nav>
        <Card menuData={menuData} cat={cat} />
    </>
  )
}


export default Resturant