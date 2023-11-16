'use client'

import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
import { useEffect, useState, useRef } from "react";
// import { quicksand, montserrat } from '@/utils/fonts'
import Setting from "@/components/createPrParam/setting";
import ImportData from "@/components/createPrParam/importData";

export default function CreateProject() {

    const [step, setStep] = useState(1)
    const [stepSetting, setStepSetting] = useState(0)

    const refProcess1 = useRef<HTMLDivElement>(null)
    const refProcess2 = useRef<HTMLDivElement>(null)
    const refProcess3 = useRef<HTMLDivElement>(null)

    const titlePage = [
        '1. Set up new project',
        '2. Data import',
        '3. Create ...'
    ]
    const titleSetting = ['General', 'ML', 'Cloud Storage', 'Webhooks', 'Label Setup', 'Members', 'Setup Labeling Workflow']

    const backStep = () => {
        if (step != 1) {
            setStep(step - 1)
        }
    }

    const nextStep = () => {
        if (step != 3) {
            setStep(step + 1)
        }
    }

    useEffect(() => {
        if (step == 1) {
            // refProcess1.current && refProcess1.current.classList.add(styles.active)
            refProcess1.current!.classList.add(styles.active)
            refProcess2.current!.classList.remove(styles.active)
            refProcess3.current!.classList.remove(styles.active)
        }
        else if (step == 2) {
            refProcess1.current!.classList.remove(styles.active)
            refProcess2.current!.classList.add(styles.active)
            refProcess3.current!.classList.remove(styles.active)
        }
        else {
            refProcess1.current!.classList.remove(styles.active)
            refProcess2.current!.classList.remove(styles.active)
            refProcess3.current!.classList.add(styles.active)
        }
    }, [step])

    useEffect(() => {

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.process}>
                <div className={`${styles.processComponent} ${styles.active}`} ref={refProcess1}>
                    <div className={styles.number}>1</div>
                    <div className={styles.name}>Set up</div>
                </div>
                <div className={styles.connection}></div>

                <div className={styles.processComponent} ref={refProcess2}>
                    <div className={styles.number}>2</div>
                    <div className={styles.name}>Import data</div>
                </div>
                <div className={styles.connection}></div>

                <div className={styles.processComponent} ref={refProcess3}>
                    <div className={styles.number}>3</div>
                    <div className={styles.name}>Create done</div>
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.titleAndNav}>
                    <div className={styles.title}>
                        {step == 1 ? titlePage[step - 1] + ' _ ' + titleSetting[stepSetting] : ''}
                        {step == 2 ? titlePage[step - 1] : ''}
                    </div>
                    <div className={styles.navigation}>
                        <div className={styles.back} onClick={backStep}>
                            <Image className={styles.backImg} src={"/arrow-right.svg"} width={24} height={24} alt="" priority />
                            <span className={styles.navigationText}>Back</span>
                        </div>
                        <div className={styles.next} onClick={nextStep}>
                            <span className={styles.navigationText}>Next</span>
                            <Image className={styles.nextImg} src={"/arrow-right.svg"} width={24} height={24} alt="" priority />
                        </div>
                    </div>
                </div>

                {step == 1
                    ? <Setting stepSetting={stepSetting} setStepSetting={setStepSetting} titleSetting={titleSetting} />
                    : <ImportData />}
                {/* <Setting /> */}

            </div>

        </div>
    )
}
