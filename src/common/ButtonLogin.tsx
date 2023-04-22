import {ROUTES} from "../utils/routes";
import styles from "../components/Header/Header.module.css";
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