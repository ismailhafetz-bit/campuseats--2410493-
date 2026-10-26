
import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import CartPage from './components/CartPage.jsx'
import Footer from './components/Footer.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  const [vendors, setVendors] = useState([])
  const [selectedVendor, setSelectedVendor] = useState(null)
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [view, setView] = useState('menu')
  const [lastOrder, setLastOrder] = useState(null)

  // B6: Favourite items
  const [favourites, setFavourites] = useState([])
  const [favouritesOnly, setFavouritesOnly] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setVendors(data)
        setSelectedVendor(data[0] ?? null)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [reloadKey])

  function handleAdd(item) {
    setCart((currentCart) => {
      const existingLine = currentCart.find(
        (line) => line.item.id === item.id
      )

      if (existingLine) {
        return currentCart.map((line) =>
          line.item.id === item.id
            ? { ...line, qty: line.qty + 1 }
            : line
        )
      }

      return [...currentCart, { item, qty: 1 }]
    })
  }

  function handleChangeQty(itemId, delta) {
    setCart((currentCart) =>
      currentCart
        .map((line) =>
          line.item.id === itemId
            ? { ...line, qty: line.qty + delta }
            : line
        )
        .filter((line) => line.qty > 0)
    )
  }

  function handleRemove(itemId) {
    setCart((currentCart) =>
      currentCart.filter((line) => line.item.id !== itemId)
    )
  }

  function handlePlaceOrder(details) {
    const total = cart.reduce(
      (sum, line) => sum + line.item.price * line.qty,
      0
    )

    setLastOrder({ ...details, total })
    setCart([])
    setView('done')
  }

  function handleToggleFavourite(itemId) {
    setFavourites((currentFavourites) =>
      currentFavourites.includes(itemId)
        ? currentFavourites.filter((id) => id !== itemId)
        : [...currentFavourites, itemId]
    )
  }

  const cartCount = cart.reduce(
    (total, line) => total + line.qty,
    0
  )

  // Filter the selected vendor's menu when the checkbox is enabled.
  const displayedItems = selectedVendor
    ? selectedVendor.menu.filter(
        (item) =>
          !favouritesOnly || favourites.includes(item.id)
      )
    : []

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />

      <main className="container">
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage
            message={error}
            onRetry={() => setReloadKey((key) => key + 1)}
          />
        ) : (
          <>
            {view === 'menu' && (
              <>
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

                {selectedVendor && (
                  <section>
                    <h2 className="section-title">
                      Menu: {selectedVendor.name}
                    </h2>

                    <div>
                      <label>
                        <input
                          type="checkbox"
                          checked={favouritesOnly}
                          onChange={(event) =>
                            setFavouritesOnly(event.target.checked)
                          }
                        />
                        {' '}Favourites only
                      </label>
                    </div>

                    <MenuList
                      items={displayedItems}
                      onAdd={handleAdd}
                      favourites={favourites}
                      onToggleFavourite={handleToggleFavourite}
                    />
                  </section>
                )}
              </>
            )}

            {view === 'cart' && (
              <CartPage
                cart={cart}
                onChangeQty={handleChangeQty}
                onRemove={handleRemove}
                onPlaceOrder={handlePlaceOrder}
              />
            )}

            {view === 'done' && lastOrder && (
              <section>
                <h2 className="section-title">Order placed</h2>

                <p>Name: {lastOrder.name}</p>
                <p>Mahallah: {lastOrder.mahallah}</p>
                <p>Pickup time: {lastOrder.pickupTime}</p>
                <p>Total: RM {lastOrder.total.toFixed(2)}</p>

                <button
                  type="button"
                  className="btn"
                  onClick={() => setView('menu')}
                >
                  Back to Vendors
                </button>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
