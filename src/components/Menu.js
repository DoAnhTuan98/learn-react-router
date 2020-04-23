import React, { Component } from "react";
import {
    Link,
    useRouteMatch
} from "react-router-dom";

const menus = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "About",
        to: "/about",
        exact: false
    },
    {
        name: "Contact",
        to: "/contact",
        exact: false
    },
    {
        name: "Product",
        to: "/product",
        exact: false
    },
    {
        name: "Login",
        to: "/login",
        exact: false
    },
]

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
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact} />
            })
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Menu;
