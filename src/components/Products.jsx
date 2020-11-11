import React, {useContext} from "react"
import { productContext } from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import Banner from "./Banner"
const Products = () => {
   const {products} = useContext(productContext);
   const {products2} = useContext(productContext);
   const {products3} = useContext(productContext);
   const {products4} = useContext(productContext);
   const {dispatch} = useContext(cartContext);
    return(
        <>
        <Banner />
        <h2 style={{marginLeft:"4rem", marginTop:"2rem"}}>Nike</h2>
        <div className="products" style={{marginTop: '30px'}}>
          
        {products.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   Rs {product.price}.00
               </div>
            </div>
            <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                 <button className="buyNow" >add to cart</button>
               </div>
             
            </div>
            </div>
        ))}
        </div>
        <h2 style={{marginLeft:"4rem"}}>Skechers</h2>
         <div className="products" style={{marginTop: '30px'}}>
        {products2.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   Rs {product.price}.00
               </div>
            </div>
            <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                 <button className="buyNow" >add to cart</button>
               </div>
             
            </div>
            </div>
        ))}
         </div>
         <h2 style={{marginLeft:"4rem"}}>Reebok</h2>
         <div className="products" style={{marginTop: '30px'}}>
        {products3.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   Rs {product.price}.00
               </div>
            </div>
            <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                 <button className="buyNow" >add to cart</button>
               </div>
             
            </div>
            </div>
        ))}
        </div>
        <h2 style={{marginLeft:"4rem"}}>Adidas</h2>
         <div className="products" style={{marginTop: '30px'}}>
        {products4.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   Rs {product.price}.00
               </div>
            </div>
            <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                 <button className="buyNow" >add to cart</button>
               </div>
             
            </div>
            </div>
        ))}
        </div>
        </>
    )

}

export default Products;