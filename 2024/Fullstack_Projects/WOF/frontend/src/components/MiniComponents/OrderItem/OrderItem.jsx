import formatDate from "../../../helpers/formatDate"
function OrderItem({order}) {
  return (
    <div className="orderItem">
    <h3>Order ID: {order._id}</h3>
    <p>Date: {formatDate(order.createdAt)}</p>
    <p>Status: {order.status}</p>
    <p>Total Price: ${order.totalPrice}</p>
    <div>
        <h4>Shipping Address</h4>
        <p>
            {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}
        </p>
    </div>
    <div>
        <h4>Ordered Items</h4>
        <ul className="product-list">
            {order.items.map(item => (
                <li key={item._id} className="product-item">
                    {item.productID.title} ({item.quantity}) - ${item.productID.price} each | Total: ${item.productID.price * item.quantity}
                </li>
            ))}
        </ul>
    </div>
</div>
  )
}

export default OrderItem
