'use client';
import {useSession} from "next-auth/react"

interface AuthWrapper {
  children: React.ReactNode;
}

export const AuthWrapper = ({children}:AuthWrapper) => {
  const { data:session } = useSession();

  if(session){
    return <>{children}</>;
  }
}