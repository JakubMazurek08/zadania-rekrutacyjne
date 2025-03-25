'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  image: { url: string; alt: string }
  price: number;
}

export const ProductsDisplay = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        fetch('/api/products')
        .then((res) => res.json()
        .then((data) => setProducts(data.docs)))
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <h1>Your Products:</h1>
      <ul className="products-list">
        {products.map((product) => (
          <li className="product" key={product.id}>
            <div className="productLabel">
              <h1>{product.name}</h1>
              <p>{product.price}zł</p>
            </div>
            <Image src={product.image.url} alt={product.image.alt} height={250} width={250} />
          </li>
        ))}
      </ul>
    </>
  )
}
