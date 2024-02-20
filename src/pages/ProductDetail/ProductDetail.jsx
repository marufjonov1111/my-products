import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loder/Loader";

function ProductDetail({loading}){
    const [product, setProduct] = useState({})
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        loading.setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=> setProduct(data))
        .then(()=> loading.setLoading(false))
    },[])
    return(
        <div className="product__detail">
            {
                
                loading.loading ? <Loader/> :
                <div className="container">
                <center>
                    <h1>{product.title}</h1>
                        <img width={600} src={product.image} alt={product.title}/>
                        <p>{product.description}</p>
                        <p> $ {product.price}</p>
                </center>
         </div>
            }
         
        </div>
    )
}

export default ProductDetail