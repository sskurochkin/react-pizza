import React from 'react';
import styles from './Search.module.scss'
import {SearchContext} from "../../context/SearchContext";

function Search() {

    const {searchValue, setSearchValue} = React.useContext(SearchContext)

    return (
        <div className={styles.root}>

            {searchValue.length > 2 && (
                <span className={styles.clear} onClick={()=>setSearchValue('')}>x</span>
            )}


            <input
                type="text"
                placeholder="Search pizzas..."
                className={styles.input}
                value={searchValue}
                onChange={(e)=>{setSearchValue(e.target.value)}}
            />
        </div>)

}

export default Search;