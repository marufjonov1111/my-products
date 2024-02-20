import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loder/Loader";

function Home({loading}){
    const [data,setData] = useState([])
    useEffect(()=>{
        loading.setLoading(true)
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=> setData(data))
        .then(()=> loading.setLoading(false))
    },[])
    return(
        <div className="container">
            {
              loading.loading ? <Loader/> :  
                <div>
                        <h1 className="text-center">Home</h1>
                        <ul className="praduct__list d-flex flex-wrap justify-content-between">
                            {data.map((item,index)=>(
                                <li className="praduct__item" key={index}>
                                    <div className="card" style={{"width": "18rem",'height': '400px'}}>
                                    <img src={item.image} className="card-img-top h-50 object-fit-contain" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title.slice(0,20)}</h5>
                                        <p className="card-text">{item.description.slice(0,30)}</p>
                                        <p className="card-text"> $ {item.price}</p>
                                        <Link to={`/product-detail/${item.id}`} className="btn btn-primary">    more</Link>
                                    </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                </div>          
            }

        </div>
    )
}

export default Home