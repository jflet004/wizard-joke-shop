import React from 'react'
import ItemCard from './ItemCard'
import SearchBar from './SearchBar'

const ItemList = ({ items, searchItem, onSearchChange }) => {
  const itemCards = items.map(item => 
    <ItemCard
      key={item.id}
      item={item}
      />
    )
  return (
    <div>
      <SearchBar searchItem={searchItem} onSearchChange={onSearchChange} />
      {itemCards}
    </div>
  )
}

export default ItemList
