import Image from 'next/image'
import { quicksand } from '@/utils/fonts'
import styles from './machineLearning.module.css'
import Toggle from '@/components/toggle'

export default function MachineLearning() {
    return (
        <div className={styles.mlContent}>
            <div className={styles.description}>Add one or more machine learning models to predict labels for your data. To import predictions without connecting a model, see the documentation.</div>

            <div className={styles.btnComplex}>
                <button className={styles.btnBox}>
                    <Image className={styles.btnItem} src="/plus.svg" alt="" width="24" height="24" />
                    <span className={`${styles.btnText} ${quicksand.className}`}>Add Your Model</span>
                </button>
                <button className={styles.btnBox}>
                    <Image className={styles.btnItem} src="/plus.svg" alt="" width="24" height="24" />
                    <span className={`${styles.btnText} ${quicksand.className}`}>Add from ML Gallery</span>
                </button>
                <button className={styles.btnBox}>
                    <Image className={styles.btnItem} src="/market.svg" alt="" width="24" height="24" />
                    <span className={`${styles.btnText} ${quicksand.className}`}>Add from ML Models Marketplace</span>
                </button>
            </div>

            <div className={styles.mlAssist}>
                <div className={styles.mlTitle}>ML-Assisted Labeling</div>
                <div className={styles.mlAssistComponent}>
                    <div className={styles.toggleBlock}>
                        <Toggle />
                    </div>
                    <span className={styles.mlAssistText}>Start model training after any annotations are submitted or updated</span>
                </div>
                <div className={styles.mlAssistComponent}>
                    <div className={styles.toggleBlock}>
                        <Toggle />
                    </div>
                    <span className={styles.mlAssistText}>Retrieve predictions when loading a task automatically</span>
                </div>
                <div className={styles.mlAssistComponent}>
                    <div className={styles.toggleBlock}>
                        <Toggle />
                    </div>
                    <span className={styles.mlAssistText}>Show predictions to annotators in the Label Stream and Quick View</span>
                </div>
            </div>

            <div className={styles.modelVersion}>
                <div className={styles.mlTitle}>Model Version</div>
                <div className={styles.mlDescription}>Model version allows you to specify which prediction will be shown to the annotators.</div>
                <div className={styles.modelVerComponent}>
                    <select name="type" id="" className={`${styles.modelVerSelect} ${quicksand.className}`}>
                        <option className={styles.modelVerOption} value="Model Version 1.0" hidden>Select</option>
                        <option className={styles.modelVerOption} value="Model Version 1.0">Model Version 1.0</option>
                        <option className={styles.modelVerOption} value="Model Version 1.0">Model Version 1.0</option>
                        <option className={styles.modelVerOption} value="Model Version 1.0">Model Version 1.0</option>
                        <option className={styles.modelVerOption} value="Model Version 1.0">Model Version 1.0</option>
                    </select>
                    <button className={styles.btnBox}>
                        <Image className={styles.btnItem} src="/check.svg" alt="" width="24" height="24" />
                        <span className={`${styles.btnText} ${quicksand.className}`}>Reset</span>
                    </button>
                </div>
            </div>

            <div className={styles.training}>
                <div className={styles.modelTraining}>
                    <div className={styles.mlTitle}>Model Training</div>
                    <div className={styles.modelTrainingElement}>
                        <div className={styles.modelTrainingText}>Epoch</div>
                        <input className={`${styles.modelTrainingNumber} ${quicksand.className}`} type="number" value='1'></input>
                    </div>
                    <div className={styles.modelTrainingElement}>
                        <div className={styles.modelTrainingText}>Batch Size</div>
                        <input className={`${styles.modelTrainingNumber} ${quicksand.className}`} type="number" value='1'></input>
                    </div>
                    <div className={styles.modelTrainingElement}>
                        <div className={styles.modelTrainingText}>Image Width</div>
                        <input className={`${styles.modelTrainingNumber} ${quicksand.className}`} type="number" value='1'></input>
                    </div>
                    <div className={styles.modelTrainingElement}>
                        <div className={styles.modelTrainingText}>Image Height</div>
                        <input className={`${styles.modelTrainingNumber} ${quicksand.className}`} type="number" value='1'></input>
                    </div>
                </div>

                <div className={styles.trainingConnect}>
                    <div className={styles.connectState}>
                        <div className={styles.connectStateBtn}>
                            <button className={styles.connectBtn}>
                                <span className={`${styles.btnTextRed} ${quicksand.className}`}>Stop</span>
                            </button>
                            <button className={styles.connectBtn}>
                                <span className={`${styles.btnTextWhite} ${quicksand.className}`}>Reset</span>
                            </button>
                        </div>
                        <div className={styles.stateConnected}>
                            <span className={styles.stateConnectedText}>Connected</span>
                            <Image className={styles.more} src="/more.svg" alt="" width="24" height="24" />
                        </div>
                    </div>

                    <div className={styles.url}>
                        <div className={styles.urlTitle}>URL</div>
                        <div className={styles.urlContent}>http://108.181.196.144:8027</div>
                    </div>

                    <div className={styles.version}>
                        <div className={styles.versionTitle}>Version</div>
                        <div className={styles.versionContent}>1697648031</div>
                    </div>

                    <div className={styles.behavior}>
                        <button className={styles.connectBtn}>
                            <span className={`${styles.btnTextWhite} ${quicksand.className}`}>Start Training</span>
                        </button>
                        <button className={styles.connectBtn}>
                            <span className={`${styles.btnTextWhite} ${quicksand.className}`}>Dashboard</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}