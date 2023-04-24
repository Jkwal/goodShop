import {FC} from "react";

import {Button} from "antd";


interface ButtonAddToBasketProps {
    className?: string;
    disabled?: boolean;
    onClick: () => void;
}


export const ButtonAddToBasket: FC<ButtonAddToBasketProps> = ({className, disabled, onClick}) => {
    return (
        <Button disabled={disabled} className={className} onClick={onClick}>
            Add to cart
        </Button>
    )
}