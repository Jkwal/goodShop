import {ROUTES} from "../../utils";
import styles from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";

export const ButtonLogin = () =>{
    return(
        <NavLink to={ROUTES.LOGIN}>
            <div className={styles.login}>
                <div className={styles.username}>Log in</div>
            </div>
        </NavLink>
    )
}