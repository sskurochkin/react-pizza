import Sort, {sortNames} from "../components/Sort/Sort";
import qs from 'qs';
import {useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useRef, useState} from "react";
import Categories from "../components/Categories/Categories";
import PageTitle from "../components/ui/PageTitle/PageTitle";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/Pizza/PizzaSceleton";
import Pagination from "../components/ui/Pagination";
import {SearchContext} from "../context/SearchContext";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory, setCurrentPage, setFilters} from "../slices/filterSlice";
import axios from "axios";

function Home() {

    const navigate = useNavigate()
    const isSearch = useRef(false)
    const isMounted = useRef(false)
    const {activeCategory, currentPage,  sort}= useSelector((state)=>state.filter)

    const sortValue= sort.sortValue
    const dispatch = useDispatch()


    const {searchValue} = useContext(SearchContext)

    const [loading, setLoading] = useState(true)
    const [pizzas, setPizzas] = useState([])



    useEffect(()=>{
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortNames.find(el=>el.sortValue === params.sortValue)
            dispatch(setFilters({...params, sort}))

            isSearch.current = true

        }
    },[])

    const fetchPizzas = ()=>{
        const category = activeCategory > 0 ? `category=${activeCategory}` : ''
        const sortBy = sortValue?.replace('-', '')
        const order = sortValue.includes('-') ? 'asc' : 'desc'
        const search = searchValue ? `&search=${searchValue}` : ''

        setLoading(true)

        axios.get(`https://65228f44f43b17938414a280.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                setPizzas(res.data)
                setLoading(false)
            })
            .catch((e) => {
                    console.log(e)
                    setPizzas([])
                    setLoading(true)
                }
            )

    }

    useEffect(() => {
        window.scrollTo(0, 0)

        !isSearch.current && fetchPizzas()

        isSearch.current = false


    }, [activeCategory, sortValue, searchValue, currentPage])

    useEffect(()=>{

        if(isMounted.current){
            const queryString = qs.stringify({
                sortValue,
                activeCategory,
                currentPage
            })

            navigate(`?${queryString}`)
        }

        isMounted.current = true

    }, [activeCategory, sortValue, searchValue, currentPage])
    const onChangePage = number => {
        dispatch(setCurrentPage(number))}

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

            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>


        </>)

}

export default Home;