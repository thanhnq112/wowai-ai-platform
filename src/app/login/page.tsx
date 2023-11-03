import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
import { quicksand, montserrat } from '@/utils/fonts'

export default function Login() {

    const submitHandler = () => {
        console.log('submit');

    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image className={styles.logo} src={"/logo.svg"} width={24} height={24} alt="" priority />
                <span className={`${styles.description} ${quicksand.className}`}>Your end-to-end platform for AI training</span>
            </div>
            <div className={`${styles.right} ${montserrat.className}`}>
                <div className={styles.title}>Sign in</div>

                <form className={styles.form}>
                    <label className={styles.formLabel}>
                        <span className={styles.fieldName}>UserName</span>
                        <input className={`${styles.formInput} ${montserrat.className}`} type="text" placeholder="Username or email address" />
                    </label>
                    <label className={styles.formLabel}>
                        <span className={styles.fieldName}>Password</span>
                        <input className={`${styles.formInput} ${montserrat.className}`} type="password" placeholder="Enter your password" />
                    </label>

                    <div className={styles.forgotPw}>
                        <Link href={'/'} className={`${styles.forgotPwText} ${montserrat.className}`}>Forgot Password</Link>
                    </div>

                    <div className={styles.btnGroup}>
                        <Link href={'/'} className={styles.btnSignUp}>
                            <span className={styles.btnSignUpText}>Sign Up</span>
                        </Link>
                        <Link href={'/'} className={styles.btnSignIn}>
                            <span className={styles.btnSignInText}>Sign In</span>
                        </Link>
                        {/* <input className={styles.btnSignIn} type="submit" value="Sign In" /> */}
                        {/* <div className={styles.btnSignIn}>
                        </div> */}
                    </div>
                    <Link href={'/'}>
                        <div className={styles.btnLoginGoogle}>
                            <span className={styles.btnLoginGoogleText}>Login with Google</span>
                            <Image className={styles.blinkItem} src={"/blink.svg"} width={24} height={24} alt="" priority />
                        </div>
                    </Link>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </div>
        </div>
    )
}