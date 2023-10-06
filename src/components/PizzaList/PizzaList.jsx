import React, {useEffect, useState} from 'react';
import Pizza from "../Pizza/Pizza";
import PageTitle from "../ui/PageTitle/PageTitle";

function PizzaList(props) {

    const [pizzas, setPizzas] = useState()
    useEffect(()=>{

        const fetchPizzas =  async ()=> {await fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(data=>setPizzas(data))

        }

        fetchPizzas()


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
                        title={pizza.title}
                        price={pizza.price * 10}
                        img={pizza.image}
                    />)}
            </div>
        </>

    );
}

export default PizzaList;