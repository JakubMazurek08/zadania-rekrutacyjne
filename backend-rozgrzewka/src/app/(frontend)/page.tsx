import React from 'react'
import {Navbar} from '@/app/(frontend)/components/Navbar'
import './styles.css'
import {AuthWrapper} from '@/app/(frontend)/components/AuthWrapper'
import {ProductsDisplay} from '@/app/(frontend)/components/ProductsDisplay'

export default async function HomePage() {
  return (
    <div>
      <Navbar/>
      <AuthWrapper>
        <ProductsDisplay/>
      </AuthWrapper>
    </div>
  )
}
