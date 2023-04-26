import {FC} from "react";

import {CartItem} from "types";
import {BasketItem} from "../BasketItem";


interface BasketListProps {
    cart: CartItem[]
}


export const BasketList: FC<BasketListProps> = ({cart}) => {

    return (
        <>
            {
                cart.map((item) => (
                    <BasketItem key = {item.id} item={item}/>
                ))
            }
        </>
    )
}