import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'
import BreadCrumbsSection from '../sections/BreadCrumbsSection'
import FooterSection from '../sections/FooterSection'
import HeaderSection from '../sections/HeaderSection'
import ProductAllSection from '../sections/ProductAllSection'

const ProductsView = () => {
  const productContext = useContext(ProductContext)
  let currentPage = "All Products"
  window.top.document.title = `${currentPage} || Fixxo`
  return (
    <>
      <HeaderSection />
      <BreadCrumbsSection />
      <ProductAllSection title="All products" items={productContext}/>
      <FooterSection />
    </>
  )
}

export default ProductsView