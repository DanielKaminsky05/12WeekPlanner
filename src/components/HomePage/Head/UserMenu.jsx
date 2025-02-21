import React from 'react';
import { useAuthContext } from '../../../UserAuth/AuthContext';

export default function UserMenu() {
  const { user } = useAuthContext();

  return (
    <div>
      {user ? <p>{user.email}</p> : <p>Loading...</p>}
    </div>
  );
}