import Head from 'next/head'
import { useState } from 'react'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginPage from './Login'
export default function Home() {

  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {user ? <CookieStandAdmin
        cookiesArray ={resources}
        createResource = {createResource}
        logout = {logout}
        deleteResource={deleteResource}
        
      /> : <LoginPage login={login} user={user} />
      }

    </div>
  )
}
