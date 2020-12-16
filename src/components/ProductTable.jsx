import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable() {
    return (
        <div>
            <h2>Product Table</h2>
            <ProductCategoryRow />
            <ProductRow />
        </div>
    )
}
