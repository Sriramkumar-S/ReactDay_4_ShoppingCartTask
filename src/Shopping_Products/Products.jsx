/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import './Product.css'

const Products = ({
    id, productName, productImage, productPrice, isForSale, buyOptions, discount, customerReviews, handleAddToCart, handleRemoveFromCart, isAddedToCart
}) => {
    return <>
        <div className="col lg-3" style={{ padding: "8px" }}>
            <div className="card h-100" style={{ width: "18rem" }}>
                {isForSale && <div className="sale">Sale</div>}
                <img src={productImage} className="card-img-top" alt="productName" />
                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="card-title text-center">{productName}</h5>

                        {customerReviews &&
                            <div>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                        }
                        {discount.discountAvailable &&
                            <div>
                                <span className="strike">${productPrice}.00</span>&nbsp;
                                <span>${discount.discountPrice}.00</span>
                            </div>
                        }
                        {productPrice && !discount.discountAvailable &&
                            <div>
                                ${productPrice}.00
                            </div>
                        }
                        {buyOptions.viewOptions &&
                            <div>
                                ${buyOptions.priceRange.minPrice}.00 - ${buyOptions.priceRange.maxPrice}.00
                            </div>
                        }

                    </div>

                </div>
                <div className="card-footer text-center bg-transparent border-top-0">
                    {buyOptions.viewOptions &&
                        <button type="button" className="btn btn-outline-secondary" style={{ color: "black" }}>View Option</button>
                    }
                    {!buyOptions.viewOptions && (isAddedToCart ? <button type="button" className="btn btn-outline-secondary" style={{ color: "black" }}
                        onClick={() => handleRemoveFromCart({ id })}>Remove from cart</button>
                        : <button type="button" className="btn btn-outline-secondary" style={{ color: "black" }}
                            onClick={() => handleAddToCart({ id, productName, productImage, productPrice, isForSale, buyOptions, discount, customerReviews })}>Add to cart</button>)

                    }
                </div>
            </div>
        </div>

    </>
};

Products.propTypes = {
    id: PropTypes.number,
    productName: PropTypes.string,
    productImage: PropTypes.string,
    productPrice: PropTypes.number,
    isForSale: PropTypes.bool,
    buyOptions: PropTypes.shape({
        viewOptions: PropTypes.bool,
        priceRange: PropTypes.shape({
            minPrice: PropTypes.number,
            maxPrice: PropTypes.number
        })
    }),
    discount: PropTypes.shape({
        discountAvailable: PropTypes.bool,
        discountPrice: PropTypes.number
    }),
    customerReviews: PropTypes.bool,
    handleAddToCart: PropTypes.func,
    handleRemoveFromCart: PropTypes.func,
    isAddedToCart: PropTypes.bool

}
export default Products