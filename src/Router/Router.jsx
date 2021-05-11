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
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/all-categories" component={CategoriesLists} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
