import React from 'react'
import { UserContext } from '../../context/User';
import { useContext, useState } from 'react';
import AccountSidebar from '../../components/MiniComponents/AccountSidebar/AccountSidebar';
import Orders from '../../components/Orders/Orders';
import "./UserAcc.scss";

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
    <div className='accountDashboard'>

      <div className="dashboardDisplay">
        <AccountSidebar setSelectedComponent={setSelectedComponent} user={user} />
        {renderComponent()}
      </div>
    </div>
  )
}

export default UserAcc
