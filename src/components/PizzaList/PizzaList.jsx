import React, {useEffect, useState} from 'react';
import Pizza from "../Pizza/Pizza";
import PageTitle from "../ui/PageTitle/PageTitle";
import pizzaData from '../../assets/db.json'

function PizzaList(props) {

    const [pizzas, setPizzas] = useState()
    useEffect(()=>{


        setTimeout(()=>{
            setPizzas(pizzaData.pizzas)
        }, 1000)

        // fetch('https://fakestoreapi.com/products?limit=10')
        //     .then(res=>res.json())
        //     .then(data=>setPizzas(data))

    }, [])



    if(!pizzas){
        return <h1>Loading.....</h1>
    }

    return (

        <>
            <PageTitle title='Все пиццы'/>
            <div className="content__items">

                {pizzas.map((pizza) =>
                    <Pizza
                        key={pizza.id}
                        {...pizza}
                        // title={pizza.name}
                        //
                        // price={pizza.price}
                        // imgUrl={pizza.imageUrl}
                        // // category={pizza.category}
                        // // rating={pizza.rating}
                        // sizes={pizza.sizes}
                        // types={pizza.types}
                    />)}
            </div>
        </>

    );
}

export default PizzaList;