import Link from "next/link";
import Image from "next/image";
import styles from './cardList.module.css'
import { dataProjects } from "@/utils/data/dataProjects";


type Data = Array<{
    id: number;
    title: string;
    description: string;
    tags: string[];
}>;

export default function CardList() {

    const numCol = 5

    const formatData = (data: Data) => {
        data.unshift({
            id: -1,
            title: '',
            description: '',
            tags: []
        })
        // console.log(data);

        return data.reduce<Data[]>((acc, val, index) => {
            const innerIndex = Math.floor(index / numCol)
            if (Array.isArray(acc[innerIndex])) {
                acc[innerIndex].push(val)
            }
            else { acc.push([val]) }
            return acc
        }, [])
    }
    const dataFormatted = formatData([...dataProjects])
    // console.log(dataFormatted);

    return (
        <div className={styles.container}>

            {dataFormatted.map((element, index) => {
                return (
                    <div className={styles.row} key={index}>
                        {element.map((e, i) => {
                            return (
                                e.id == -1 ?
                                    <Link key={e.id} className={`${styles.card} ${styles.cardCreate}`} href={'/createProject'}>
                                        <Image className={styles.cardCreateItem} src={"/plus-thin.svg"} width={24} height={24} alt="" priority />
                                        <span className={styles.cardCreateText}>Create a project</span>
                                    </Link>
                                    :
                                    <div key={e.id} className={`${styles.card} ${styles.cardProject}`}>
                                        <div className={styles.cardProjectThumb}>
                                            <Image className={styles.cardProjectThumbItem} src={"/thumb-project.png"} width={240} height={240} alt="" priority />
                                        </div>
                                        <div className={styles.cardProjectInfo}>
                                            <div className={styles.cardProjectTitle}>{e.title}</div>
                                            <div className={styles.cardProjectDes}>{e.description}</div>
                                            <div className={styles.cardProjectTags}>
                                                {e.tags.map((el, idx) => {
                                                    return (
                                                        <span key={idx} className={styles.cardProjectTagElement}>{el}</span>

                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                )
            })}

            {/* {dataFormatted.map((element, index) => {
                return (
                    <div className={styles.row}>
                        {

                        }
                    </div>
                )

            })} */}

            {/* {dataFormatted.map((e, index) => {
                if (index == 0) {
                    e.map((element, i) => {
                        if (i == 0) {
                            return (
                                <div className={`${styles.card} ${styles.cardCreate}`}>
                                    <Image className={styles.cardCreateItem} src={"/plus.svg"} width={24} height={24} alt="" priority />
                                    <span className={styles.cardCreateText}>Create a project</span>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={index} className={styles.card}>
                                    <div className={styles.cardProjectThumb}>
                                        <Image className={styles.cardProjectThumbItem} src={"/thumb-project.png"} width={24} height={24} alt="" priority />
                                    </div>
                                    <div className={styles.cardProjectTitle}>Image Object Detection</div>
                                    <div className={styles.cardProjectDes}>Draw boxes around different objects in an image</div>
                                    <div className={styles.cardProjectTags}>
                                        <span className={styles.cardProjectTagElement}>Image</span>
                                        <span className={styles.cardProjectTagElement}>Object detection</span>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                else {
                    e.map((element, i) => {
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardProjectThumb}>
                                    <Image className={styles.cardProjectThumbItem} src={"/thumb-project.png"} width={24} height={24} alt="" priority />
                                </div>
                                <div className={styles.cardProjectTitle}>Image Object Detection</div>
                                <div className={styles.cardProjectDes}>Draw boxes around different objects in an image</div>
                                <div className={styles.cardProjectTags}>
                                    <span className={styles.cardProjectTagElement}>Image</span>
                                    <span className={styles.cardProjectTagElement}>Object detection</span>
                                </div>
                            </div>
                        )
                    })
                }
            })} */}


            {/* {dataProjects.map((e, index) => {
                return (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardProjectThumb}>
                            <Image className={styles.cardProjectThumbItem} src={"/thumb-project.png"} width={24} height={24} alt="" priority />
                        </div>
                        <div className={styles.cardProjectTitle}>Image Object Detection</div>
                        <div className={styles.cardProjectDes}>Draw boxes around different objects in an image</div>
                        <div className={styles.cardProjectTags}>
                            <span className={styles.cardProjectTagElement}>Image</span>
                            <span className={styles.cardProjectTagElement}>Object detection</span>
                        </div>
                    </div>
                )
            })} */}
            {/* {component()} */}
            {/* {props.isProject ? `<div>abc</div>` : `<div>efg</div>`} */}

            {/* card project {props.isProject ? '1' : '0'} */}
        </div>
    )
}
