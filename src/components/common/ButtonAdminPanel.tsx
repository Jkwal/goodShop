import styles from "../Header/Header.module.css";
import {ROUTES} from "../../utils";
import {Link} from "react-router-dom";

export const ButtonAdminPanel = () => {
    return (
        <Link
            className={styles.goods}
            to={ROUTES.GOODS}
        >
            Admin panel
        </Link>
    )
}