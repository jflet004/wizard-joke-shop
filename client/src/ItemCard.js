import React from 'react'

const ItemCard = ({ item }) => {
  const { id, name, description, img_url, price } = item
  return (
    <div className='itemCard'>
      <img src={img_url} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{price} galleons</h3>
    </div>
  )
}

export default ItemCard
