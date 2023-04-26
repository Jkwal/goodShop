import {FC} from "react";

import {Button} from "antd";
import styles from './BasketItem.module.css'


import {CartItem} from "types";
import {IconClose} from "common";
import {useAppDispatch} from "hooks";
import {addItemToCart, removeItemFromCart} from "store";


interface BasketItemProps {
    item: CartItem;
}


export const BasketItem: FC<BasketItemProps> = ({item}) => {

    const {id, title, price, images, quantity} = item;

    const dispatch = useAppDispatch();

    const changeQuantity = (item: CartItem, quantity: number) => {
        dispatch(addItemToCart({...item, quantity}));
    };

    const removeItem = (id: number) => {
        dispatch(removeItemFromCart(id));
    };

    return (
        <div className={styles.item}>

            <div className={styles.img}
                 style={{backgroundImage: `url(${images![0]})`}}
            ></div>

            <h4 className={styles.title}>{title}</h4>

            <p className={styles.price}>{price}$</p>


            <div className={styles.change}>

                <Button
                    ghost
                    size='small'
                    shape="circle"
                    className={styles.minus}
                    onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                    }
                >-
                </Button>

                <p className={styles.quantity}>{quantity}</p>

                <Button
                    ghost
                    size='small'
                    shape="circle"
                    className={styles.plus}
                    onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                    }
                >+
                </Button>
            </div>


            <div className={styles.total}>{price * quantity}$</div>

            <IconClose id={id} onClick={removeItem}/>

        </div>
    )
}