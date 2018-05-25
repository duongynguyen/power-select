import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="Product">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                	<div className="thumbnail">
                		<img src="https://cdn1.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-400x400.jpg" alt="iphonex" />
                		<div className="caption">
                			<h3>iPhone X</h3>
                			<p>
                				29.999.000 VNĐ
                			</p>
                			<p>
                				<a className="btn btn-primary">Mua</a>
                				<a className="btn btn-default">Xem</a>
                			</p>
                		</div>
                	</div>
                </div>
            </div>
        );
    }
}

export default Product;
