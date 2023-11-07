import Link from "next/link";
import Image from "next/image";
import styles from './showProjects.module.css'
import CardList from "../CardList";
import { dataProjects } from "@/utils/data/dataProjects";
import { quicksand } from '@/utils/fonts'
import GridLayout from "react-grid-layout";
// import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";

export default function ShowProjects() {



    return (
        <div className={styles.container}>

            <div className={styles.createProj}>
                <span className={styles.createProjText}>Create a new project</span>
                <Link className={styles.createProjBtn} href={'/createProject'}>
                    <span className={styles.createProjBtnText}>Create a project</span>
                    <Image className={styles.createProjBtnPlusItem} src={"/plus.svg"} width={24} height={24} alt="" priority />
                </Link>
            </div>

            <div className={styles.filterAndSearch}>
                <div className={styles.filter}>
                    <Image className={styles.filterItem} src={"/filter.svg"} width={24} height={24} alt="" priority />
                    <span className={styles.filterText}>Filter</span>
                    <Image className={styles.arrowDownItem} src={"/arrow-down.svg"} width={24} height={24} alt="" priority />
                </div>

                <div className={styles.search}>
                    <Image className={styles.searchItem} src={"/search.svg"} width={24} height={24} alt="" priority />
                    <input className={`${styles.searchInput} ${quicksand.className}`} type="text" placeholder="Search" id="" name="" />


                </div>
            </div>

            <div className={styles.listProjects}>

                <CardList />

            </div>
        </div>
    )
}