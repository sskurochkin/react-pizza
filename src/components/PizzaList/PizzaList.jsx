import React from 'react';
import Pizza from "../Pizza/Pizza";
import PageTitle from "../ui/PageTitle/PageTitle";

function PizzaList(props) {


    const list = [1, 2, 3, 4, 5, 6, 7, 8]


    return (

        <>
            <PageTitle title='Все пиццы'/>
            <div className="content__items">

                {list.map((pizza) =>
                    <Pizza
                        key={pizza}
                        title={pizza}
                        price={pizza * 100}
                    />)}
            </div>
        </>

    );
}

export default PizzaList;