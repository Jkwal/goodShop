import {FC, MouseEvent} from "react";
import {ROUTES} from "../utils/routes";
import styles from "../components/Header/Header.module.css";
import {NavLink} from "react-router-dom";

interface ButtonLogoutProps {
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export const ButtonLogout: FC<ButtonLogoutProps> = ({onClick}) => {
    return (
        <NavLink to={ROUTES.LOGIN}>
            <div className={styles.logout} onClick={onClick}>
                Log out
            </div>
        </NavLink>
    )
}