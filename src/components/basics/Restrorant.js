import React, { useState } from 'react'
import './style.css';
import Menu from './menuAPI'
import Navbar from './Navbar'
import MenuCard from './MenuCard';

const categoryList = [...new Set(Menu.map((currElem) => {
    return currElem.category;
})), "All"
];

const Restrorant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(categoryList)
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
        } else {
            const updatedList = Menu.filter((currElem) => {
                return currElem.category === category;
            });
            setMenuData(updatedList);
        }
    }
    return (
        <>
            <Navbar filter={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restrorant
