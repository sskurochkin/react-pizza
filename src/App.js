import React from "react";
import './assets/scss/app.scss'
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";


function App() {
  return (
      <div className="wrapper">
          <Header/>
          <div className="content">

              <div className="container">
                  <Routes>
                      <Route path={'/'} element={<Home/>}/>
                      <Route path={'/cart'} element={<Cart/>}/>
                      {/*<Route path={'/pizzas/:id'} element={<PageNotFound/>}/>*/}
                      <Route path={'*'} element={<PageNotFound/>}/>
                  </Routes>
              </div>
          </div>
      </div>
  );
}

export default App;
