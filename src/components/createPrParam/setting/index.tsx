import Image from 'next/image'
import styles from './setting.module.css'
import { quicksand } from '@/utils/fonts'
import { useRef, useEffect } from "react";
import General from './general';
import MachineLearning from './machineLearning';


type settingProps = {
    stepSetting: number,
    // setStepSetting: React.Dispatch<React.SetStateAction<number>>,
    setStepSetting: Function,
    titleSetting: Array<string>
};

export default function Setting(props: settingProps) {

    const refSettingList = useRef<HTMLDivElement>(null)


    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {

        // Remove all class Active 
        const arraySettingList = Array.from(refSettingList.current?.children || [])
        arraySettingList.forEach((element) => {
            element.classList.remove(styles.active)
        });

        // Add class Active in step activated
        const target = e.target as HTMLElement | null;
        target?.classList.add(styles.active)

        // Set state of stepSetting
        const valueTarget = target?.innerText.split('_')[1] as string;
        props.setStepSetting(props.titleSetting.indexOf(valueTarget))

    }

    console.log(props.stepSetting);



    return (
        <div className={styles.container}>
            <div className={styles.settingList} ref={refSettingList} >

                {props.titleSetting.map((title, index) => {
                    return (
                        index === 0
                            ? <div key={index} className={`${styles.settingElement} ${styles.active}`} onClick={clickHandler}>{index + 1}_{title}</div>
                            : <div key={index} className={`${styles.settingElement}`} onClick={clickHandler}>{index + 1}_{title}</div>
                    )
                })}

            </div>
            {/* {props.stepSetting == 0 && <General />} */}
            {/* {props.stepSetting == 1 && <MachineLearning />} */}
            {props.stepSetting == 0 ? <General /> : ''}
            {props.stepSetting == 1 ? <MachineLearning /> : ''}
            {/* <General /> */}
            {/* <MachineLearning /> */}

        </div>
    )
}