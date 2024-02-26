
function AccountSidebar({setSelectedComponent}) {
  return (
    <div className="sidebar">
    <h2>My Account</h2>
    <ul>
      <li onClick={() => setSelectedComponent('orders')}>My Orders</li>
    </ul>
  </div>
  )
}

export default AccountSidebar
