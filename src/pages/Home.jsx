import Sort from "../components/Sort/Sort";
// import PizzaList from "../components/PizzaList/PizzaList";
import React, {useContext, useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import Categories from "../components/Categories/Categories";
import PageTitle from "../components/ui/PageTitle/PageTitle";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/Pizza/PizzaSceleton";
import Pagination from "../components/ui/Pagination";
import {SearchContext} from "../context/SearchContext";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../slices/filterSlice";

function Home() {

    const {activeCategory,  sort}= useSelector((state)=>state.filter)
    const sortValue= sort.sortValue
    const dispatch = useDispatch()



    const {searchValue} = useContext(SearchContext)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [pizzas, setPizzas] = useState([])


    useEffect(() => {

        const category = activeCategory > 0 ? `category=${activeCategory}` : ''
        const sortBy = sortValue.replace('-', '')
        const order = sortValue.includes('-') ? 'asc' : 'desc'
        const search = searchValue ? `&search=${searchValue}` : ''

        setLoading(true)

        fetch(`https://65228f44f43b17938414a280.mockapi.io/items?page=${page}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => res.json())
            .then(data => {
                setPizzas(data)
                setLoading(false)
            }).catch((e) => {
                console.log(e)
                setPizzas([])
                setLoading(true)
            }
        )
        window.scrollTo(0, 0)
    }, [activeCategory, sortValue, searchValue, page])



    const items = pizzas.map((pizza) => <Pizza
        key={pizza.id}
        {...pizza}
    />)
    const skeleton = [...new Array(4)].map((item, i) => <PizzaSkeleton key={i}/>)



    const View = () => {

        return loading
            ? skeleton
            : <div className="content__items">
                {items}
             </div>


    }

    return (
        <>
            <div className="content__top">
                <Categories value={activeCategory} onChangeCategory={(id)=>dispatch(changeCategory(id))}/>
                <Sort/>
            </div>
            <PageTitle title='Все пиццы'/>

            <View/>

            <Pagination onChangePage={(number)=>setPage(number)}/>


        </>)

}

export default Home;