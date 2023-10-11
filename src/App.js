import React from "react";
import './assets/scss/app.scss'
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import {SearchContext} from "./context/SearchContext";

import {store} from "./store/store";
import {Provider} from "react-redux";


function App() {

    const [searchValue, setSearchValue] = React.useState('')


  return (
      <div className="wrapper">
          <Provider store={store}>
              <SearchContext.Provider value={{searchValue, setSearchValue}}>
                  <Header />
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
              </SearchContext.Provider>
          </Provider>


      </div>
  );
}

export default App;
