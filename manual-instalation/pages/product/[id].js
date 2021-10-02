import React from 'react'
import router, { useRouter } from 'next/router'

const ProductItem = () => {
    const { query: { id } } = useRouter()

    return (
        <div>
            <h1>Esta es la pagina del producto: {id}</h1>
        </div>
    )
}

export default ProductItem