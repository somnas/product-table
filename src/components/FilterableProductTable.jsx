import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function FilterableProductTable() {
    return (
        <div>
            <h1>APP</h1>
            <SearchBar />
            <ProductTable />
        </div>
    )
}
