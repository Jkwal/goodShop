import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {Button, Input} from "antd";
import styles from "styles/LoginPage.module.css";

import {ROUTES} from "utils";
import {useAppDispatch} from "hooks";
import {getUser, loginUser} from "store";


export function LoginPage() {

    const dispatch = useAppDispatch();
    const user = useSelector(getUser)

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleClear = () => setValues({email: "", password: ""})

    useEffect(() => {
        handleClear()
    }, [user])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((value) => value);

        if (!isNotEmpty) return;

        dispatch(loginUser(values));

        if (dispatch(loginUser.fulfilled)) {
            navigate(ROUTES.HOME);
        }

    };

    const navigate = useNavigate();

    return (
        <section className={styles.LoginPage}>

            <div className={styles.header}>
                <Button ghost onClick={() => navigate(-1)}>Back</Button>

                <h2 className={styles.title}>Log in</h2>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.info}>

                    <Input
                        type="email"
                        name="email"
                        size="large"
                        value={values.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        autoComplete="off"
                        required/>

                    <Input.Password className={styles.password}
                                    type="password"
                                    name="password"
                                    size="large"
                                    value={values.password}
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required/>

                    <div className={styles.wrapper}>

                        <Button className={styles.button}
                                htmlType="submit"
                                type="primary"
                        >
                            Log In
                        </Button>

                        <div className={styles.registration}>

                            <p>Don't have an account?</p>
                            <NavLink to={ROUTES.REGISTRATION}>
                                <Button className={styles.button}
                                        ghost>
                                    Sign Up
                                </Button>
                            </NavLink>

                        </div>


                    </div>
                </div>

            </form>

        </section>
    );
}