import {FC} from "react";
import {NavLink} from "react-router-dom";

import {ROUTES} from "utils/routes";


interface ButtonLoginProps {
    className?: string;
}


export const ButtonLogin: FC<ButtonLoginProps> = ({className}) => {
    return (
        <NavLink to={ROUTES.LOGIN}>
            <div className={className}>
                <div>Log in</div>
            </div>
        </NavLink>
    )
}