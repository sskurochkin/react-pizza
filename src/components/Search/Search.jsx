import React, {useCallback} from 'react';
import styles from './Search.module.scss'
import {SearchContext} from "../../context/SearchContext";
import debounce from 'lodash.debounce'

function Search() {

    const [value, setValue] = React.useState('')

    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    const searchRef = React.useRef()
    const searchDebounce = useCallback(
        debounce((str)=>{
            setSearchValue(str)
            }, 400
        ), [])

    const handleChangeInput = (e)=>{
        setValue(e.target.value);
        searchDebounce(e.target.value)
    }

    const handleClickClear = ()=>{
        setValue('')
        setSearchValue('');
        searchRef.current.focus()
    }





    return (
        <div className={styles.root}>

            {searchValue.length > 2 && (
                <span className={styles.clear} onClick={handleClickClear}>x</span>
            )}


            <input
                type="text"
                placeholder="Search pizzas..."
                ref={searchRef}
                className={styles.input}
                value={value}
                onChange={(e)=>{handleChangeInput(e)}}
            />
        </div>)

}

export default Search;