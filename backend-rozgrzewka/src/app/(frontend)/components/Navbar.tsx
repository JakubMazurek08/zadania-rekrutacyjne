'use client';
import {signIn, signOut, useSession} from "next-auth/react"

export const Navbar = () => {
  const { data:session } = useSession();

  if(session){
    return(
      <>
        <h1>Logged In As: {session?.user?.name}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    )
  }
  return(
    <>
      <h1>Not Signed In...</h1>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  )
}