import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import styles from './RegistrationForm.module.css';

import {ROUTES} from "utils";
import {createUser} from "store";
import {useAppDispatch} from "hooks";
import {ButtonRegister, InputAvatar, InputEmail, InputName, InputPassword} from "common";


export const RegistrationForm = () => {

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

        if (dispatch(createUser.fulfilled)) {
            handleClear();
            navigate(ROUTES.LOGIN);
        }

    };

    const handleClear = () => setValues({
        name: "",
        email: "",
        password: "",
        avatar: "",
    })

    return (
        <form className={styles.registrationForm} onSubmit={handleSubmit}>

            <InputName value={values.name} onChange={handleChange}/>

            <InputEmail value={values.email} onChange={handleChange}/>

            <InputPassword value={values.password} onChange={handleChange}/>

            <InputAvatar value={values.avatar} onChange={handleChange}/>

            <div className={styles.wrapper}>

                <ButtonRegister/>

            </div>
        </form>
    )
}