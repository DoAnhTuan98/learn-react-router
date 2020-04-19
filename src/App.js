import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Menu from './components/Menu';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    {/* menu */}
                    <Menu />
                    <hr />
                    {/* Nội dung */}
                    <Switch>
                        <Route exact path="/">
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
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
