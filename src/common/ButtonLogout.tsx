import {FC, MouseEvent} from "react";
import {NavLink} from "react-router-dom";

import {ROUTES} from "utils/routes";


interface ButtonLogoutProps {
    className?: string;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
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