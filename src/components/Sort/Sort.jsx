import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeSort} from "../../slices/filterSlice";

export const sortNames = [
    {name: 'популярности +', sortValue: 'rating'},
    {name: 'популярности -', sortValue: '-rating'},
    {name: 'цене +', sortValue: 'price'},
    {name: 'цене -', sortValue: '-price'},
    {name: 'алфавиту +', sortValue: 'title'},
    {name: 'алфавиту -', sortValue: '-title'}]

function Sort() {

    const sortRef = useRef()
    const sort= useSelector((state)=>state.filter.sort)
    const dispatch = useDispatch()
    const [isOpen , setIsOpen] = useState(false)


    useEffect(()=>{

        const handler = (event) =>{
            !sortRef.current.contains(event.target) && setIsOpen(false)
        }

        document.addEventListener('click' , handler)
        return ()=>document.removeEventListener('click',handler)
    }, [])


    const handleClickSort = (obj)=>{
        dispatch(changeSort(obj))
        setIsOpen(false)

    }

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label" onClick={()=>setIsOpen(v => !v)}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span>{sort.name}</span>
            </div>


            {isOpen &&
                <div className="sort__popup">
                    <ul>

                        {sortNames.map((item, i)=>
                            <li
                                key={i}
                                onClick={()=>handleClickSort(item)}
                                className={sort.sortValue===item.sortValue ? 'active':''}>{item.name}
                            </li>
                        )}
                    </ul>
                </div>
            }

        </div>
    );
}

export default Sort;