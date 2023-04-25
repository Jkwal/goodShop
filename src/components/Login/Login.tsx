import styles from "./Login.module.css";

import {ButtonBack} from "common";
import {LoginForm} from "../LoginForm";


export const Login = () => {

    return (
        <section className={styles.Login}>

            <div className={styles.header}>

                <ButtonBack/>

                <h2 className={styles.title}>Log in</h2>

            </div>

            <LoginForm/>

        </section>
    );

}
