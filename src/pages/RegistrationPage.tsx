import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Input} from "antd";

import styles from "styles/RegistrationPage.module.css";
import {useAppDispatch} from "../hooks";
import {createUser} from "../store";

export function RegistrationPage() {

    const navigate = useNavigate();


    const dispatch = useAppDispatch();

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value});
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((value) => value);

        if (!isNotEmpty) return;

        dispatch(createUser(values));
    };

    return (
        <section className={styles.RegistrationPage}>

            <div className={styles.header}>
                <Button ghost onClick={() => navigate(-1)}>Back</Button>

                <h2 className={styles.title}>Sign Up</h2>
            </div>

            <div className={styles.content}>

                <form className={styles.form} onSubmit={handleSubmit}>

                    <Input className={styles.name}
                           type="name"
                           name="name"
                           size="large"
                           value={values.name}
                           placeholder="Enter your name"
                           onChange={handleChange}
                           required/>

                    <Input className={styles.email}
                           type="email"
                           name="email"
                           size="large"
                           value={values.email}
                           placeholder="Enter your email"
                           onChange={handleChange}
                           required/>

                    <Input.Password className={styles.password}
                                    type="password"
                                    name="password"
                                    size="large"
                                    value={values.password}
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    required/>

                    <Input className={styles.avatar}
                           type="avatar"
                           name="avatar"
                           size="large"
                           value={values.avatar}
                           placeholder="Your avatar"
                           onChange={handleChange}
                           required/>

                    <div className={styles.wrapper}>

                        <Button className={styles.button} ghost htmlType="submit">
                            Register
                        </Button>

                    </div>
                </form>

            </div>
            <p>Можно скопировать эту ссылку для аватара:</p><br/>
            <p>https://api.lorem.space/image/face?w=640&h=480&r=867</p>

        </section>
    );
}