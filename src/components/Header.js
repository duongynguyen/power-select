import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
	    		<nav className="navbar navbar-light bg-faded">
	    			<a className="navbar-brand">Bài 02</a>
	    			<ul className="nav navbar-nav">
	    				<li className="nav-item active">
	    					<a className="nav-link">Trangchủ <span className="sr-only">(current)</span></a>
	    				</li>
	    				<li className="nav-item">
	    					<a className="nav-link">Danh sách sản phẩm</a>
	    				</li>
	    				<li className="nav-item">
	    					<a className="nav-link">Liên hệ</a>
	    				</li>
	    				<li className="nav-item">
	    					<a className="nav-link">Map</a>
	    				</li>
	    			</ul>
	    			<form className="form-inline navbar-form pull-right">
	    				<input className="form-control" type="text" placeholder="Search" />
	    				<button className="btn btn-success-outline" type="submit">Search</button>
	    			</form>
	    		</nav>
            </div>
        );
    }
}

export default Header;
