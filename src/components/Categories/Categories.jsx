import React, {useState}  from 'react';
import CategoriesItem from "../ui/CategoriesItem/CategoriesItem";

function Categories(props) {
    const catList = [
        {id: 'all', name: 'Все'},
        {id: 'meat', name: 'Мясные'},
        {id: 'veg', name: 'Вегетарианская'},
        {id: 'grill', name: 'Гриль'},
        {id: 'hot', name: 'Острые'},
        {id: 'closed', name: 'Закрытые'},
    ]

    const [activeFilter, setActiveFilter] = useState(catList[0].id)

    const filterHandler = (id)=>{
        setActiveFilter(id)
    }

    return (
        <div className="categories">
            <ul>
                {catList.map(item=>
                    <CategoriesItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        onClick={()=>filterHandler(item.id)}
                        className={activeFilter === item.id ? 'active' : ''}
                    />)
                }
            </ul>
        </div>
    );
}

export default Categories;