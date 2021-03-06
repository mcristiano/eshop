import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

const Navbar = (props) => {
    return (
        <div className="main-nav">
            <nav className="navbar navbar-expand-md navbar-bg-color fixed-top justify-content-left">
                <div className="container">

                <a className="navbar-brand" href="/">eBaaba</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span>
                    <i className="fa fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar.in">
                    <ul className="navbar-nav">
                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar.in">
                        <Link className="nav-link" to="/">home</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar.in">
                        <Link className="nav-link" to="shop">shop</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar.in">
                        <Link className="nav-link" to="/about">about</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar.in">
                        <Link className="nav-link" to="#">blog</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar.in">
                        <Link className="nav-link" to="/contact">contact</Link>
                    </li> 
                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar.in">
                        <Link to="/cart" className="nav-link">
                            <FaShoppingCart style={{ color: '#33b27b', fontSize: '20px'}}/>
                            { props.itemInCart? (<span className='badge badge-warning' id='lblCartCount'> { props.itemInCart } </span>) : '' } 
                        </Link>
                    </li>
                    </ul>
                </div> 
                </div>
            </nav>	
	</div>
    )
}

const mapStateToProp = (state) => (
    {itemInCart: state.products.cart.length }
)

export default connect(mapStateToProp)(Navbar);

