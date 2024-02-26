import React from 'react'
import { UserContext } from '../../context/User';
import { useContext, useState } from 'react';
import AccountSidebar from '../../components/MiniComponents/AccountSidebar/AccountSidebar';
import Orders from '../../components/Orders/Orders';

function UserAcc() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const {user} = useContext(UserContext);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'orders':
        return <Orders />;
      default:
        return null;
    }
  };
  return (
    <div>
      <h1>Hello, {user?.fullName}!</h1>
      <div className="accountDashboard">
        <AccountSidebar setSelectedComponent={setSelectedComponent} />
        {renderComponent()}
      </div>
    </div>
  )
}

export default UserAcc
