import React from 'react'
import Item from '../Item'

const items = [
    {   id:'2303adef',   
        name: 'Dosa',
        price: 24
    },
    {   id:'2309adef',
        name: 'Burgur',
        price: 190
    },
    {   id:'2307adef',
        name: 'Pav Bhaji',
        price: 20
    },
    {   id:'2306adef',
        name: 'Idli',
        price: 40
    },
]
const Menu = () => {
  return (
    <div>
        <h1>Menu</h1>
        {items.map(i => <Item key={i.id} id={i.id} name={i.name} price={i.price}/>)}
    </div>
  )
}

export default Menu