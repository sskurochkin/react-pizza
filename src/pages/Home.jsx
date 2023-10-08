import Sort from "../components/Sort/Sort";
// import PizzaList from "../components/PizzaList/PizzaList";
import React, {useEffect, useState} from "react";
import Categories from "../components/Categories/Categories";
import PageTitle from "../components/ui/PageTitle/PageTitle";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/Pizza/PizzaSceleton";


function Home(props) {

    const [loading, setLoading] = useState(true)
    const [pizzas, setPizzas] = useState([])
    const [sort , setSort] = useState({
        name: 'популярности',
        sortValue: 'rating'
    })
    const [activeCategory, setActiveCategory] = useState(0)


    useEffect(() => {

        const category = activeCategory > 0 ? `category=${activeCategory}` : ''
        const sortBy = sort.sortValue.replace('-', '')
        const order = sort.sortValue.includes('-') ? 'asc' : 'desc'

        setLoading(true)

        fetch(`https://65228f44f43b17938414a280.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json())
            .then(data => {
                setPizzas(data)
                setLoading(false)
            }).catch((e)=>{
                console.log(e)
            setPizzas([])
            setLoading(true)
        }

        )
        window.scrollTo(0,0)
    }, [activeCategory, sort])

    console.log(sort, activeCategory)
    const View = ()=>{

        return loading
            ?
                [...new Array(6)].map((item, i) => <PizzaSkeleton key={i}/>)
            :
                <div className="content__items">

                    {pizzas.map((pizza) => <Pizza
                        key={pizza.id}
                        {...pizza}
                    />)}
                </div>

        }

    return (
        <>
            <div className="content__top">
                <Categories value={activeCategory} onClickCategory={(i)=>setActiveCategory(i)} />
                <Sort sort={sort} sortHandlerClick={(i)=> setSort(i)}/>
            </div>
            <PageTitle title='Все пиццы'/>

            <View/>


        </>)

}

export default Home;