import React, {useState}  from 'react';
import CategoriesItem from "../ui/CategoriesItem/CategoriesItem";

function Categories({value, onClickCategory}) {
    const catList = [
        {name: 'Все'},
        {name: 'Мясные'},
        {name: 'Вегетарианская'},
        {name: 'Гриль'},
        {name: 'Острые'},
        {name: 'Закрытые'},
    ]

    const filterHandler = (id)=>{
        onClickCategory(id)
    }

    return (
        <div className="categories">
            <ul>
                {catList.map((item, index)=>
                    <CategoriesItem
                        key={index}
                        id={index}
                        name={item.name}
                        onClick={()=>filterHandler(index)}
                        className={value === index ? 'active' : ''}
                    />)
                }
            </ul>
        </div>
    );
}

export default Categories;