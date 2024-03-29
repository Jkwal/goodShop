import {FC} from "react";
import {NavLink} from "react-router-dom";

import {ROUTES} from "utils";


interface ButtonLogoutProps {
    className?: string;
    onClick: () => void;
}


export const ButtonLogout: FC<ButtonLogoutProps> = ({className, onClick}) => {
    return (
        <NavLink to={ROUTES.LOGIN}>
            <div className={className} onClick={onClick}>
                Log out
            </div>
        </NavLink>
    )
}