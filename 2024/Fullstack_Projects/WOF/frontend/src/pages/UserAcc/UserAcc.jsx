import React from 'react'
import { UserContext } from '../../context/User';
import { useContext } from 'react';

function UserAcc() {
    const {user} = useContext(UserContext);
  return (
    <div>
      <h1>Hello, {user?.fullName}!</h1>
    </div>
  )
}

export default UserAcc
