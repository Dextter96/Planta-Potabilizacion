import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Book from "../components/Book/Book";
import Shelving from "../components/Shelving/Shelving";

const App = () => (
   <BrowserRouter>
      <Layout>
         <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/game" component={Game} /> */}
            <Route exact path="/Shelving" component={Shelving} />
            <Route exact path="/book/:cap" component={Book} />
            {/* <Route component={NotFound} /> */}
         </Switch>
      </Layout>
   </BrowserRouter>
);

export default App;
