import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import {ReactNode} from "react";

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NorthStudio',
  description: 'NorthStudio, Young - Passionate - Dedicated, Spreading Inspiration...',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>{children}</body>
    </html>
  )
}
