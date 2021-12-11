import React, {useEffect, useState} from "react";
import axios from "axios";
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [categories, setCategories] = useState(null);
    const [categoriesData, setCategoriesData] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then((data) => {
            if(data.status){
                setCategories(data.data);
            }else{
                alert('Loading of Categories Failed Please wait or give it another try');
            }
        })
    },[])

    const onCategorySelected = (category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then((categoryData) => {
            if(categoryData.status){
                setCategoriesData(categoryData.data);
            }else{
                alert('Selected Categories Data is Failed to Fetch Please give it a another try')
            }
        })
    }

    const onProductSelected = (product) => {
        navigate(`/product-details/${product.id}`)
    }

    return (
        <div>
            <div className="page-heading">Home Page</div>
            <div className="categoryy-div">
                {
                    categories && categories.length > 0 ? categories.map((element) => {
                        return(
                            <div onClick={() => onCategorySelected(element)} key={element} className="category-elelemt">{element}</div>
                        )
                    }) : <div>Loading Categories...</div>
                }
            </div>
            <div className="categories-items-div">
                {
                    categoriesData && categoriesData.length > 0 ? categoriesData.map((element) => {
                        return(
                            <div onClick={() => onProductSelected(element)} className="products-card" key={element.id}>
                                <img alt="product-image-missing" src={element.image} className="product-image" />
                                <div className="product-title">{element.title}</div>
                                <div className="product-price">Price: ${element.price}</div>
                                <div className="rating">Rating: {element.rating.rate}</div>
                            </div>
                        )
                    }) : 
                        null
                }
            </div>
        </div>
    )
}

export default Home;