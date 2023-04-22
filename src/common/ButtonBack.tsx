import React from "react";

import {Button} from "antd";
import {useNavigate} from "react-router-dom";

export const ButtonBack = () => {

    const navigate = useNavigate();

    return (
        <Button ghost onClick={() => navigate(-1)}>Back</Button>
    )

}