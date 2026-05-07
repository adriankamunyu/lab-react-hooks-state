import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  function handleAddToCart(product) {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product])
    }
  }
  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
 <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList selectedCategory={selectedCategory} onAddToCart={handleAddToCart}/>

      <Cart cart={cart} />

      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
