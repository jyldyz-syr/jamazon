import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from '../app/pages/Product'
import Home from '../app/pages/Home'
import Categories from '../app/pages/Categories'
import CategoriesLists from '../app/pages/CategoriesLists'


const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route path="/product" component={Product} />
          <Route path="/all-categories" component={CategoriesLists} />
          <Route path= "/categories/:item" component={Categories} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
