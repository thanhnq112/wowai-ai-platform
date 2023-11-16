import styles from './toggle.module.css'

export default function Toggle() {
    return (
        <label className={styles.switch}>
            <input type="checkbox"></input>
            <span className={styles.slider}></span>
        </label>
    )
}