import {FC} from "react";
import {Button} from "antd";


interface ButtonPayProps {
    onClick: () => void
}


export const ButtonPay: FC<ButtonPayProps> = ({onClick}) => {
    return (
        <Button
            type="primary"
            size="small"
            onClick={onClick}
        >
            Pay
        </Button>
    )
}