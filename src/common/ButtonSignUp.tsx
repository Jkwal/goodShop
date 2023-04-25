import {NavLink} from "react-router-dom";

import {Button} from "antd";

import {ROUTES} from "utils";

export const ButtonSignUp = () => {

    return (
        <NavLink to={ROUTES.REGISTRATION}>
            <Button ghost>
                Sign Up
            </Button>
        </NavLink>
    )
}