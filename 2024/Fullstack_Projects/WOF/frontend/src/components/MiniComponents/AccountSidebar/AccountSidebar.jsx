import "./AccountSidebar.scss";
function AccountSidebar({setSelectedComponent, user}) {
  return (
    <div className="sidebar">
      <div className="titles">
          <h3>Hello, {user?.fullName}!</h3>
          <hr />
      </div>
      <span onClick={() => setSelectedComponent('orders')}><i className="bi bi-receipt-cutoff"></i> My Orders</span>
      <span onClick={() => setSelectedComponent('orders')}><i className="bi bi-receipt-cutoff"></i> My Orders</span>
      <span onClick={() => setSelectedComponent('orders')}><i className="bi bi-gear-fill"></i> Settings</span>

  </div>
  )
}

export default AccountSidebar
