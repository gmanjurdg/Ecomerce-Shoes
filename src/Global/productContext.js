import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import iphone from "../assets/iphone.jpg";
import headphones from "../assets/headphones.jpg"
import microphone from "../assets/microphone.jpg"
import Skechers1 from "../assets/Skechers1.jpg"
import Skechers2 from "../assets/Skechers2.jpg"
import Skechers3 from "../assets/Skechers3.jpg"
import rings from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"
import perfum from "../assets/perfume.jpg"
import dslr from "../assets/dskr.jpg"

export const productContext = createContext();
const ProductContextProvider = (props) => {
    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Nike 1', price: 500, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'Nike 2', price: 500, image: perfum,productStatus: 'new'},
        {id: 3, name: 'Nike 3', price: 500, image: watch,productStatus: 'new'},
        {id: 4, name: 'Nike 4', price: 500, image: shoes,productStatus: 'new'},
      ])
      const [products2] = useReducer(ProductReducer, [
       {id: 5, name: 'Skechers 1', price: 500, image: Skechers1,productStatus: 'hot'},
        {id: 6, name: 'Skechers 2', price: 500, image: Skechers2,productStatus: 'new'},
        {id: 7, name: 'Skechers 3', price: 500, image: Skechers3,productStatus: 'hot'},
        {id: 8, name: 'Skechers 4', price: 500, image: Skechers1,productStatus: 'new'},
      ])
      const [products3] = useReducer(ProductReducer, [
        {id: 5, name: 'Reebok 1', price: 500, image: microphone,productStatus: 'hot'},
         {id: 6, name: 'Reebok 2', price: 500, image: headphones,productStatus: 'new'},
         {id: 7, name: 'Reebok 3', price: 500, image: iphone,productStatus: 'hot'},
         {id: 8, name: 'Reebok 4', price: 500, image: rings,productStatus: 'new'},
       ])
       const [products4] = useReducer(ProductReducer, [
        {id: 5, name: 'Adidas 1', price: 500, image: microphone,productStatus: 'hot'},
         {id: 6, name: 'Adidas 2', price: 500, image: headphones,productStatus: 'new'},
         {id: 7, name: 'Adidas 3', price: 500, image: iphone,productStatus: 'hot'},
         {id: 8, name: 'Adidas 4', price: 500, image: rings,productStatus: 'new'},
       ])
      
    return(
        <productContext.Provider value={{products, products2, products3, products4}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;