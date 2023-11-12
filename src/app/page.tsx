'use client'
// import Link from "next/link";
// import Image from "next/image";
// import styles from './page.module.css'
// import NavBar from '@/components/NavBar'
// import CreateProject from '@/components/CreateProject'
// import ShowProjects from '@/components/ShowProjects'
// import { useState, useRef, useEffect } from "react";
import { redirect } from 'next/navigation';


export default function Home() {
    redirect('/dashboard');

    // const [stateLeftNav, setStateLeftNav] = useState(false)
    // const refContainer = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     if (stateLeftNav) {
    //         refContainer.current!.style.marginLeft = '3.6vw'
    //     }
    //     else {
    //         if (refContainer.current) {
    //             refContainer.current.style.marginLeft = '14vw'
    //         }
    //     }
    // }, [stateLeftNav])

    // return (
    //     <div className={styles.container} ref={refContainer}>
    //         <NavBar lefNavBarClose={stateLeftNav} funcSetStateNav={setStateLeftNav} />

    //         {/* <CreateProject /> */}

    //         <ShowProjects />
    //     </div>
    // )
}
