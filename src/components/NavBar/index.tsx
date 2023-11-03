'use client'

import Link from "next/link";
import Image from "next/image";
import styles from './navBar.module.css'
import React, { useState, useRef } from 'react';

type navBarProps = {
    lefNavBarClose: boolean,
    funcSetStateNav: Function
}

export default function NavBar(props: navBarProps) {
    const [hamburgerClose, setHamburgerClose] = useState(0)
    const refDivLeftComponent = useRef<HTMLDivElement>(null)
    const refImgFolderGradient = useRef<HTMLImageElement>(null)
    const refDivProjects = useRef<HTMLDivElement>(null)
    const refTextOrg = useRef<HTMLDivElement>(null)
    const refTextNotebook = useRef<HTMLDivElement>(null)
    const refTextSetting = useRef<HTMLDivElement>(null)
    const refTextDoc = useRef<HTMLDivElement>(null)
    const refTextPrice = useRef<HTMLDivElement>(null)
    const refTextLogout = useRef<HTMLDivElement>(null)

    const hamburgerHandler = () => {
        if (hamburgerClose) {
            setHamburgerClose(0)
            console.log('open hamburger');
            refDivProjects.current!.style.display = 'flex'
            refTextOrg.current!.style.display = 'block'
            refTextNotebook.current!.style.display = 'block'
            refTextSetting.current!.style.display = 'block'
            refTextDoc.current!.style.display = 'block'
            refTextPrice.current!.style.display = 'block'
            refTextLogout.current!.style.display = 'block'
            refImgFolderGradient.current!.style.display = 'none'
            refDivLeftComponent.current!.style.width = '14vw'
            props.funcSetStateNav(false)
        }
        else {
            setHamburgerClose(1)
            console.log('close hamburger');
            refDivProjects.current!.style.display = 'none'
            refTextOrg.current!.style.display = 'none'
            refTextNotebook.current!.style.display = 'none'
            refTextSetting.current!.style.display = 'none'
            refTextDoc.current!.style.display = 'none'
            refTextPrice.current!.style.display = 'none'
            refTextLogout.current!.style.display = 'none'
            refImgFolderGradient.current!.style.display = 'block'
            refDivLeftComponent.current!.style.width = '3.6vw'
            props.funcSetStateNav(true)
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.leftComponent} ref={refDivLeftComponent}>
                <div className={styles.leftComponent_top}>
                    <Link href={'/'}>
                        <Image className={styles.folderGradientItem} src={"/folder-gradient.svg"} width={24} height={24} alt="" priority ref={refImgFolderGradient} />
                        <div className={styles.projectsBtn} ref={refDivProjects}>
                            <Image className={styles.folderItem} src={"/folder.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.projectsText}>Your projects</span>
                            <Image className={styles.arrowItem} src={"/arrow-left.svg"} width={24} height={24} alt="" priority />
                        </div>
                    </Link>

                    <Link href={'/'}>
                        <div className={styles.organizations}>
                            <Image className={styles.organizationsItem} src={"/organizations.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.organizationsText} ref={refTextOrg}>Organizations</span>
                        </div>
                    </Link>

                    <Link href={'/'}>
                        <div className={styles.notebook}>
                            <Image className={styles.notebookItem} src={"/notebook.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.notebookText} ref={refTextNotebook}>Notebook</span>
                        </div>
                    </Link>
                </div>

                <div className={styles.leftComponent_bottom}>
                    <Link href={'/'}>
                        <div className={styles.setting}>
                            <Image className={styles.settingItem} src={"/setting.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.settingText} ref={refTextSetting}>Setting</span>
                        </div>
                    </Link>

                    <Link href={'/'}>
                        <div className={styles.document}>
                            <Image className={styles.documentItem} src={"/document.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.documentText} ref={refTextDoc}>Document</span>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className={styles.pricing}>
                            <Image className={styles.pricingItem} src={"/pricing.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.pricingText} ref={refTextPrice}>Pricing</span>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className={styles.logout}>
                            <Image className={styles.logoutItem} src={"/logout.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.logoutText} ref={refTextLogout}>Logout</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles.topComponent}>
                <div className={styles.topComponent_left}>
                    <div className={styles.hamburger} onClick={hamburgerHandler}>
                        <Image className={styles.hamburgerItem} src={"/hamburger.svg"} width={24} height={24} alt="" priority />
                    </div>
                    <Link href={'/'}>
                        <div className={styles.logoGray}>
                            <Image className={styles.logoGrayItem} src={"/logo-gray.svg"} width={24} height={24} alt="" priority />
                        </div>
                    </Link>
                </div>
                <div className={styles.topComponent_right}>
                    <Image className={styles.avatarItem} src={"/avatar.jpg"} width={24} height={24} alt="" priority />
                </div>
            </div>


        </div>
    )
}