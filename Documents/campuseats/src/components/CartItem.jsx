
function CartItem({ line, onChangeQty, onRemove }) {
  const { item, qty } = line

  return (
    <div className="card">
      <h3>{item.name}</h3>

      <p>
        RM {item.price} × {qty}
      </p>

      <div className="actions">
        <button
          type="button"
          className="btn"
          onClick={() => onChangeQty(item.id, -1)}
        >
          −
        </button>

        <span>{qty}</span>

        <button
          type="button"
          className="btn"
          onClick={() => onChangeQty(item.id, 1)}
        >
          +
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
