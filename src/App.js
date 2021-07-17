import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Heritage from "./Heritage";
import Vip from "./Vip";

import Navbar from "./Navbar";


const App= () => {
  return (

    <>
    <div className="main">

      <Navbar />

     <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/About" component={About} />
         <Route exact path="/Heritage" component={Heritage} />
         <Route exact path="/Vip" component={Vip} />
       
         <Redirect to="/" />
     </Switch>

    </div>
</>
  );
}

export default App;
