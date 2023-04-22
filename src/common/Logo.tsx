import {FC} from "react";
import {Link} from "react-router-dom";

import {ROUTES} from "utils/routes";


interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = ({className}) =>{
    return(
        <Link className={className} to={ROUTES.HOME}>
            GoodStore
        </Link>
    )
}