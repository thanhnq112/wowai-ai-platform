import Link from "next/link";
import Image from "next/image";
import styles from './createProject.module.css'

export default function CreateProject() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                No projects here?<br />Create one and start building your AI models
            </div>
            <Link href={'/'}>
                <div className={styles.createBtn}>
                    <span className={styles.createBtnText}>Create project</span>
                    <Image className={styles.createBtnItem} src={"/arrow-right.svg"} width={24} height={24} alt="" priority />
                </div>
            </Link>
        </div>
    )
}