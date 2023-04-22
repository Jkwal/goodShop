import {useNavigate} from "react-router-dom";

import {Button} from "antd";


export const ButtonBack = () => {

    const navigate = useNavigate();

    return (
        <Button ghost onClick={() => navigate(-1)}>Back</Button>
    )
}