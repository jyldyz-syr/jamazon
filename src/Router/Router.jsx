import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../app/components/Header/Header"
import Footer from "../app/components/Footer/Footer"
import Product from '../app/pages/Product'
import Home from '../app/pages/Home'
import Categories from '../app/pages/Categories'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
