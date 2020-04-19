import React, { Component } from "react";
import {
    Link,
    useRouteMatch
} from "react-router-dom";
function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "active nav-item" : ""}>
            {/* {match && "> "} */}
            <Link to={to} className="nav-link">{label}</Link>
        </li>
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
                        <MenuLink label="About" to="/about" />
                        <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false} />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;
