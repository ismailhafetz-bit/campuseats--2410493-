
import { useState } from 'react'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import Footer from './components/Footer.jsx'
import vendors from './data/vendors.js'

function App() {
  const [selectedVendor, setSelectedVendor] = useState(vendors[0])
  const [cart, setCart] = useState([])

  function handleAdd(item) {
    setCart((currentCart) => [...currentCart, item])
  }

  return (
    <>
      <Header cartCount={cart.length} />

      <main className="container">
        <section>
          <h2 className="section-title">Today's vendors</h2>

          <div className="grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                onSelect={() => setSelectedVendor(vendor)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">
            Menu: {selectedVendor.name}
          </h2>

          <MenuList
            items={selectedVendor.menu}
            onAdd={handleAdd}
          />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
