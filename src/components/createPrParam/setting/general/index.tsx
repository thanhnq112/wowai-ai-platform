import Image from 'next/image'
import { quicksand } from '@/utils/fonts'
import styles from './general.module.css'

export default function General() {
    return (
        <div className={styles.settingContent}>
            <div className={styles.settingComp}>
                <div className={styles.settingLabel}>Project name</div>
                <input type="text" className={`${styles.settingInput} ${quicksand.className}`} placeholder='type your name project' />
            </div>
            <div className={`${styles.settingComp} ${styles.settingCompWithChild}`}>
                <div className={styles.settingCompChild}>
                    <div className={styles.settingLabel}>Type</div>
                    <select name="type" id="" className={`${styles.settingSelect} ${quicksand.className}`}>
                        <option className={styles.settingOption} value="Visual Genome" hidden>Select project type</option>
                        <option className={styles.settingOption} value="Visual Genome">Visual Genome</option>
                        <option className={styles.settingOption} value="Visual Genome">Visual Genome</option>
                        <option className={styles.settingOption} value="Visual Genome">Visual Genome</option>
                        <option className={styles.settingOption} value="Visual Genome">Visual Genome</option>
                        <option className={styles.settingOption} value="Visual Genome">Visual Genome</option>
                        <option className={styles.settingOption} value="Visual Genome">Visual Genome</option>
                    </select>
                    {/* <input type="text" className={`${styles.settingInput} ${quicksand.className}`} /> */}
                </div>
                <div className={styles.settingCompChild}>
                    <div className={styles.settingLabel}>GPU</div>
                    <select name="type" id="" className={`${styles.settingSelect} ${quicksand.className}`}>
                        <option className={styles.settingOption} value="Visual Genome" hidden>Select</option>
                        <option className={styles.settingOption} value="Visual Genome">GPU</option>
                        <option className={styles.settingOption} value="Visual Genome">GPU</option>
                        <option className={styles.settingOption} value="Visual Genome">GPU</option>
                        <option className={styles.settingOption} value="Visual Genome">GPU</option>
                        <option className={styles.settingOption} value="Visual Genome">GPU</option>
                    </select>
                    {/* <input type="text" className={`${styles.settingInput} ${quicksand.className}`} /> */}
                </div>
            </div>
            <div className={styles.settingComp}>
                <div className={styles.settingLabel}>Description</div>
                <input type="text" className={`${styles.settingInput} ${quicksand.className}`} placeholder='Share a reply' />
            </div>

            <div className={styles.settingUploadDoc}>
                <div className={styles.settingLabel}>Attach guideline in document</div>
                <div className={styles.uploadBox}>
                    <div className={styles.uploadImage}>
                        <Image className={styles.uploadImageItem} src={"/upload.svg"} width={24} height={24} alt="" priority />
                    </div>
                    <div className={styles.uploadText}>Drag & drop files here <br />or click to browse</div>
                </div>
            </div>

            <div className={styles.settingColor}>
                <div className={styles.settingLabel}>Color</div>
                <div className={styles.colorList}>
                    <div className={styles.colorItem} style={{ background: '#fff' }}></div>
                    <div className={styles.colorItem} style={{ background: '#E73247' }}></div>
                    <div className={styles.colorItem} style={{ background: '#E48832' }}></div>
                    <div className={styles.colorItem} style={{ background: '#FFD21E' }}></div>
                    <div className={styles.colorItem} style={{ background: '#8FBA3D' }}></div>
                    <div className={styles.colorItem} style={{ background: '#3889E2' }}></div>
                    <div className={styles.colorItem} style={{ background: '#513CED' }}></div>
                    <div className={styles.colorItem} style={{ background: '#9C27B0' }}></div>
                </div>
            </div>

            <div className={styles.sampling}>
                <div className={styles.settingLabel}>Task Sampling:</div>
                <div className={styles.radio}>
                    <div className={styles.radioGroup}>
                        <div className={styles.radioBox}>
                            <input type="radio" id="" name="Task Sampling" value="Sequential Sampling" />
                        </div>
                        <div className={styles.radioDesc}>Sequential Sampling <br />Tasks are ordered by Data manager ordering</div>
                        {/* <div className={styles.radioDesc}>Tasks are ordered by Data manager ordering</div> */}

                    </div>
                    <div className={styles.radioGroup}>
                        <div className={styles.radioBox}>
                            <input type="radio" id="" name="Task Sampling" value="Random sampling" />
                        </div>
                        <div className={styles.radioDesc}>Random sampling <br />Tasks are chosen with uniform random</div>
                        {/* <div className={styles.radioDesc}>Tasks are chosen with uniform random</div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}