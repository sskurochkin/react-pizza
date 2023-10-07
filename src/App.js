import React from "react";
import './assets/scss/app.scss'
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaList from "./components/PizzaList/PizzaList";
import PageTitle from "./components/ui/PageTitle/PageTitle";


function App() {
  return (
      <div className="wrapper">
          <Header/>
          <div className="content">

              <div className="container">

                  <div className="content__top">
                        {/*<Categories/>*/}
                        <Sort/>
                  </div>

                    <PizzaList/>
              </div>
          </div>
      </div>
  );
}

export default App;
