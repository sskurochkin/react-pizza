// import React, {useEffect, useState} from 'react';
// import Pizza from "../Pizza/Pizza";
// import PageTitle from "../ui/PageTitle/PageTitle";
// import PizzaSkeleton from "../Pizza/PizzaSceleton";
//
// function PizzaList(props) {
//
//     const [pizzas, setPizzas] = useState()
//     useEffect(() => {
//
//         setTimeout(()=>{
//             fetch('https://65228f44f43b17938414a280.mockapi.io/items')
//                 .then(res => res.json())
//                 .then(data => setPizzas(data))
//
//         }, 500)
//
//     }, [])
//
//
//     if (!pizzas) {
//         return (
//             <>
//                 {[...new Array(6)].map((item, i)=><PizzaSkeleton key={i}/>)}
//             </>
//         )
//     }
//
//     return (
//
//         <>
//             <PageTitle title='Все пиццы'/>
//             <div className="content__items">
//
//                 {pizzas.map((pizza) => <Pizza
//                     key={pizza.id}
//                     {...pizza}
//                 />)}
//
//             </div>
//         </>
//
//     );
// }
//
// export default PizzaList;