import React, {useState,useEffect} from "react";
import axios from "axios";
import '../styles/productDetails.css'

const ProductDetails = () => {
    
    const [productDetails, setProductDetails] = useState(null);
    const [cartCounter, setCartCounter] = useState(0);

    useEffect(() => {
        var string = window.location.href;
        var segments = string.split("/");
        var last = segments[segments.length-1];
        axios.get(`https://fakestoreapi.com/products/${last}`).then((productDetails)=>{
            if(productDetails.status === 200){
                setProductDetails(productDetails.data);
            }else{
                alert('Failed Product Details Loading')
            }
        })
    }, [])

    const onAddToCart = () => {
        setCartCounter(cartCounter + 1);
    }

    return (
        <div>
            <div className="cart-counter">Cart Counter:{cartCounter}</div>
            {
                productDetails ? 
                    <div className="product-detail-div">
                        <div className="image-div">
                            <img className="image" alt="product-image-missing" src={productDetails.image} />
                        </div>
                        <div className="details-div">
                            <div className="title">{productDetails.title}</div>
                            <div className="price">Price: ${productDetails.price}</div>
                            <div className="description">Decription:{productDetails.description}</div>
                            <div className="category">Category: {productDetails.category}</div>
                            <div className="button-cart" onClick={() => onAddToCart()}> Add to Cart </div>
                        </div> 
                    </div> : 
                    <div className="loader">Loading.....</div>
            }
        </div>
    )
}

export default ProductDetails;