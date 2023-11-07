import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { quicksand } from '@/utils/fonts'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'WOWAi AI Platform',
    description: 'WOWAi AI Platform',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={quicksand.className}>{children}</body>
        </html>
    )
}
