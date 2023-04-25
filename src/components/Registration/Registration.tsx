import styles from './Registration.module.css';

import {ButtonBack} from "common";
import {RegistrationForm} from "../RegistrationForm";


export const Registration = () =>{

    return (
        <section className={styles.registration}>
            <div className={styles.header}>
                <ButtonBack/>

                <h2 className={styles.title}>Sign Up</h2>
            </div>

            <div className={styles.content}>

               <RegistrationForm/>

            </div>

            <div style={{width: "30%", margin: "0 auto"}}>
                <p>Можно скопировать эту ссылку для аватара:</p><br/>
                <p>https://loremflickr.com/320/240</p>
            </div>

        </section>
    );
}