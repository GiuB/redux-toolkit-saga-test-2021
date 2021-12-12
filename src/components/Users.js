import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { sagaUserFetchList } from '../store/user'

export default function Users() {
  const users = useSelector((state) => state.user.list) || []
  const dispatch = useDispatch()

  return (
    <>
      <h2>Users</h2>
      <button
        onClick={() => {
          dispatch(sagaUserFetchList.start())
        }}
      >
        Fetch users
      </button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  )
}
