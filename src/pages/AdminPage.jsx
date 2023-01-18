import React from 'react'
import UsersTablePage from '../Components/AdminInterface/UsersTable/UsersTablePage'
import PostsTablePage from '../Components/UserInterface/PostsTable/PostsTablePage'

export default function AdminPage() {
  return (
    <section className='gradient-custom p-5'>
      <UsersTablePage/>
      <PostsTablePage/>
    </section>
  )
}
