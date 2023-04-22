import {ROUTES} from "../utils/routes";
import {Link} from "react-router-dom";
import React from "react";

interface LogoProps {
    className?: string;
}
export const Logo: React.FC<LogoProps> = ({className}) =>{
    return(
        <Link className={className} to={ROUTES.HOME}>
            GoodStore
        </Link>
    )
}