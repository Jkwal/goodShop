import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Input} from "antd";

import styles from "styles/RegistrationPage.module.css";

export function RegistrationPage() {

    const navigate = useNavigate();

    return (
        <section className={styles.RegistrationPage}>

            <div className={styles.header}>
                <Button ghost onClick={() => navigate(-1)}>Back</Button>

                <h2 className={styles.title}>Sign Up</h2>
            </div>

            <div className={styles.content}>

                <div className={styles.info}>

                    <Input size="large"  placeholder="Enter your email"/>
                    <Input.Password size="large"  className={styles.password} placeholder="Enter your password"/>

                    <div className={styles.wrapper}>

                        <Button className={styles.button} onClick={() => {
                        }}>
                            Register
                        </Button>

                    </div>
                </div>

            </div>

        </section>
    );
}