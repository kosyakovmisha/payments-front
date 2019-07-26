import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Categories } from './Categories';
import { Payments } from './Payments';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Assets';
import { NavigationBar } from './components/NavigationBar'
import './App.css';

class App extends Component{
  render() {
    return(
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/categories" component={Categories} />
              <Route path="/payments" component={Payments} />
              <Route component={NoMatch}/>
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
