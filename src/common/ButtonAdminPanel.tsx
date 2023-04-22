import {FC} from "react";
import {Link} from "react-router-dom";

import {ROUTES} from "utils";


interface ButtonAdminPanelProps {
    className?: string;
}


export const ButtonAdminPanel:FC<ButtonAdminPanelProps> = ({className}) => {
    return (
        <Link
            className={className}
            to={ROUTES.GOODS}
        >
            Admin panel
        </Link>
    )
}