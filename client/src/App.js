import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Locations from './components/Locations';
import NoMatch from './components/NoMatch';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/locations/loc_id" component={Locations} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </>
)

export default App;
