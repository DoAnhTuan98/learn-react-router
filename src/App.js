import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
    showContentMenus = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main} />
            })
        }
        return result;
    }
    render() {

        return (
            <div className="App">
                <Router>
                    <div>
                        {/* menu */}
                        <Menu />
                        <hr />
                        {/* Nội dung */}
                        <Switch>
                            {/* <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route>
                                <NotFound />
                            </Route> */}
                            {this.showContentMenus(routes)}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
