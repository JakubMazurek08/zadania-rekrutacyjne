import React from 'react'
import './styles.css'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/app/(frontend)/components/SessionProvider';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const session = await getServerSession()

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
