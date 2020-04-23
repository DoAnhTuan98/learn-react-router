import React, { Component } from "react";
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';
class Products extends Component {
    showProduct = (products) => {
        let { match } = this.props;
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <NavLink to={`${match.path}/${product.slug}`} key={index}>
                    <li className="list-group-item" >
                        {product.id}-{product.name}-{product.price}
                    </li>
                </NavLink>
            })
        }
        return result;
    }
    render() {
        let products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'iphone',
                price: 100000000
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'samsung',
                price: 100000000
            },
            {
                id: 1,
                slug: 'xaomi',
                name: 'xaomi',
                price: 100000000
            },
        ]
        let { location } = this.props;
        console.log(location);

        return (
            <div className="container">
                <h2>Danh sách sản phẩm</h2>
                <div className="row">
                    <ul className="list-group">
                        {this.showProduct(products)}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/product/:slug" component={Product} />
                </div>
            </div>
        )
    }

}

export default Products;
