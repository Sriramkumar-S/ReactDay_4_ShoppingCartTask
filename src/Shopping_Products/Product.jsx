import data from '../data.json'
// import Products from './Products'
import Products from './Products';
import { useState } from 'react'
const Product = () => {

    const [addedToCart, setCart] = useState([]);

    const handleAddToCart = (products) => {
        const temp = [...addedToCart, products];
        setCart(temp);
    }

    const handleRemoveFromCart = (productId) => {
        const temp = addedToCart.filter(element => element.id !== productId.id);
        setCart(temp);
    }
    return <>

        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">All Products</a></li>
                                <li><a className="dropdown-item" href="#">Popular Item</a></li>
                                <li><a className="dropdown-item" href="#">Special Item</a></li>
                                <li><a className="dropdown-item" href="#">Fancy Product</a></li>
                                <li><a className="dropdown-item" href="#">Sale Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{addedToCart.length}</span>
                    </button>
                </form>
            </div>
        </nav>

        {/* Header */}
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white bolder">Shop in style</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">With this shop hompeage template</p>
                </div>
            </div>
        </div>

        {/* Products section */}
        <div className="container">
            <div className="row">

                {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
                {data.map((element) => (
                    <Products
                        key={element.productId}
                        id={element.productId}
                        productName={element.productName}
                        productImage={element.productImage}
                        productPrice={element.productPrice}
                        isForSale={element.isForSale}
                        discount={element.discount}
                        buyOptions={element.buyOptions}
                        customerReviews={element.customerReviews}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        isAddedToCart={Boolean(addedToCart.find(el => el.id === element.productId))}
                    />
                ))}
                {/* </div> */}
            </div>
        </div>

        {/* Footer */}
        <footer>
            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-white">Copyright © Your Website 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Product