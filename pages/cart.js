import React from 'react'
import dynamic from 'next/dynamic'

export const CartPage = dynamic(() => import('../components/CartComponents/CartPage'), {
  ssr: false,
})
// import CartPage from '../components/CartComponents/CartPage'
import MainLayout from '../layouts/MainLayout'

const cart = () => {
    return (
        <MainLayout>
            <CartPage />
        </MainLayout>
    )
}

export default cart
