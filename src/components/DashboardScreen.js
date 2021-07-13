import React, { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../services/productService'
import { CardProduct } from './CardProduct'

const DashboardScreen = () => {
    const [product, setProduct] = useState([])

    const bringProduct = () => {
        getProducts(setProduct)

    }
    console.log(product);

    useEffect(()=>{
        bringProduct()
    },[])
    


    return (
        <div>
            <CardProduct product={product}/>
        </div>
    )
}

export default DashboardScreen
