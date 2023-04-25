import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {Button} from "antd";
import styles from "./LoginForm.module.css";

import {ROUTES} from "utils";
import {useAppDispatch} from "hooks";
import {getUser, loginUser} from "store";
import {ButtonSignUp, InputEmail, InputPassword} from "common";


export const LoginForm = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const user = useSelector(getUser)

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleClear = () => setValues({email: "", password: ""})

    useEffect(() => {
        handleClear()
    }, [user])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((value) => value);

        if (!isNotEmpty) return;

        dispatch(loginUser(values));

        if (dispatch(loginUser.fulfilled)) {
            navigate(ROUTES.HOME);
        }

    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>

            <div className={styles.info}>

                <InputEmail value={values.email} onChange={handleChange}/>

                <InputPassword value={values.password} onChange={handleChange}/>

                <div className={styles.wrapper}>

                    <Button htmlType="submit"
                            type="primary"
                    >
                        Log In
                    </Button>

                    <div className={styles.registration}>

                        <p className={styles.text}>Don't have an account?</p>

                        <ButtonSignUp/>

                    </div>

                </div>
            </div>

        </form>
    )
}