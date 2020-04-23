import React, {Component} from "react";

class Product extends Component {
    render() {
        var { match } = this.props;
        return (
            <div>Đây là chi tiết sản phẩm:{match.params.slug}</div>
        )
    }
}

export default Product;
