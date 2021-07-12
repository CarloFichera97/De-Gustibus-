import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import HomePage from "./../components/Homepage";
import MenuPage from "./../components/MenuPage";
import AboutUsPage from "./../components/AboutUsPage";
import Gallery from "./../components/Gallery";
import MenuCards from "../components/MenuCards";
export const history = createBrowserHistory();

const AppRouter = () => (
  //Switching from BrowserRouter to Router in order to use my own history
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/menu" component={MenuCards} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/Gallery" component={Gallery} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
