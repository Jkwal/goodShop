import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Input} from "antd";

import {ROUTES} from "../utils";
import styles from "../styles/LoginPage.module.css";

export function LoginPage() {

    const navigate = useNavigate();

    return (
        <section className={styles.LoginPage}>

            <div className={styles.header}>
                <Button ghost onClick={() => navigate(-1)}>Back</Button>

                <h2 className={styles.title}>Log in</h2>
            </div>

            <div className={styles.content}>

                <div className={styles.info}>

                    <Input size="large" placeholder="Enter your email"/>
                    <Input.Password size="large" className={styles.password} placeholder="Enter your password"/>

                    <div className={styles.wrapper}>

                        <Button className={styles.button} ghost onClick={() => {
                        }}>
                            Log In
                        </Button>

                        <div className={styles.registration}>

                            <p>Don't have an account?</p>
                            <NavLink to={ROUTES.REGISTRATION}>
                                <Button className={styles.button} onClick={() => {
                                }}>
                                    Sign Up
                                </Button>
                            </NavLink>

                        </div>


                    </div>
                </div>

            </div>

        </section>
    );
}