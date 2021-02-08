import {Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import CreateDrink from "./pages/CreateDrink"
import SearchPage from "./pages/SearchPage";


import NotFound from "./pages/NotFound";
// import Navbar from "./component/Navbar";


class App extends Component {
  render() {
    return (
      <>
       {/* <Navbar/> */}
        <Switch>
					<Route path='/' exact component={Home} />
					<Route exact path='/details/:id' component={Details}/>
          <Route exact path='/create-drink' component={CreateDrink}/>
          <Route exact path='/search' component={SearchPage}/>
					<Route path='/notFound' component={NotFound} />
					<Redirect to='/notFound' />
				</Switch>
     </>
    )
  }
}

export default App
