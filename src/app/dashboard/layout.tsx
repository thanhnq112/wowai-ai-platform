'use client'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
import NavBar from '@/components/NavBar'
import { quicksand } from '@/utils/fonts'
import { useState, useRef, useEffect } from "react";



// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//     title: 'WOWAi AI Platform',
//     description: 'WOWAi AI Platform',
// }

export default function dashBoardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [stateLeftNav, setStateLeftNav] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (stateLeftNav) {
            refContainer.current!.style.marginLeft = '3.6vw'

        }
        else {
            if (refContainer.current) {
                refContainer.current.style.marginLeft = '14vw'

            }
        }
    }, [stateLeftNav])

    return (
        <div
            className={quicksand.className}
            style={{
                height: 'calc(100vh - 3.6vw)',
                marginTop: '3.6vw',
                marginLeft: '14vw',
                transition: 'all linear 0.1s'
            }}
            ref={refContainer}
        >
            <NavBar lefNavBarClose={stateLeftNav} funcSetStateNav={setStateLeftNav} />

            {children}

        </div>
    )
}
