
function MenuItemCard() {
  const item = {
    name: 'Ice Butter Cream Lattee',
    description: 'Caffein, Creamy, Sweet, Soft, Cold',
    price: 11.5,
    available: true,
  }

  return (
    <article className="card menu-card">
      <div className="thumb">
        {item.name.charAt(0)}
      </div>

      <h3>{item.name}</h3>
      <p className="muted">{item.description}</p>
      <p>RM {item.price.toFixed(2)}</p>

      <button>
        Add to cart
      </button>
    </article>
  )
}

export default MenuItemCard
