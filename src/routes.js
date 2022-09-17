import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Conocimientos from './components/Conocimientos';
import About from './components/About';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import Carouselito from "./components/Carousel";

const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact={true} component={Hero} />
        <Route path="/demoaboutme" exact={true} component={Carouselito} />
        <Route path="/proyectos" exact={true} component={Proyectos} />
        <Route path="/conocimientos" exact={true} component={Conocimientos} />
        <Route path="/sobremi" exact={true} component={About} />
        <Route path="/contacto" exact={true} component={Footer} />
        <Route path="*" component={Page404} />
      </Switch>
    );
  };
  export default withRouter(Routes);
  