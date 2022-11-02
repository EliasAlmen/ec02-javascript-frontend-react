import React from 'react'
import { useContext } from 'react'
import ProductCardComponent from '../components/ProductCardComponent'
import { ProductContext } from '../contexts/contexts'

const ProductFeaturedSection = ({title}) => {

    const products = useContext(ProductContext)

    return (
        <section className="container "> 
            <h3 id="featured">{title}</h3>
            <div className="featured">
                <div className="container-cards">
                    {products.featuredProducts.map(product => <ProductCardComponent key={product.articleNumber} product={product}/>)}
                </div>
            </div>
        </section>
    )
}

export default ProductFeaturedSection