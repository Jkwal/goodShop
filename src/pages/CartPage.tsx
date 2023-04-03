import React from "react";
import {Button} from "antd";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import styles from 'styles/CartPage.module.css'

import {addItemToCart, getCart, removeItemFromCart} from "../store";
import {useAppDispatch} from "../hooks";
import {CartItem} from "../types";

export function CartPage() {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const cart = useSelector(getCart);

    const changeQuantity = (item: CartItem, quantity: number) => {
        dispatch(addItemToCart({...item, quantity}));
    };

    const removeItem = (id: number) => {
        dispatch(removeItemFromCart(id));
    };


    return (

        <section className={styles.cartPage}>

            <div className={styles.header}>
                <Button ghost onClick={() => navigate(-1)}>Back</Button>
                <h2 className={styles.heading}>Cart</h2>
            </div>

            {
                !cart.length
                    ? <div className={styles.empty}>Here is empty</div>
                    : <div className={styles.content}>
                        <div className={styles.info}>
                            {
                                cart.map((item) => {
                                    const {title, images, price, id, quantity} = item;
                                    return (
                                        <div key={id} className={styles.item}>
                                            <div className={styles.img}
                                                 style={{backgroundImage: `url(${images![0]})`}}
                                            ></div>
                                            <div className={styles.about}>
                                                <h4 className={styles.title}>{title}</h4>
                                                <div>
                                                    <p className={styles.price}>{price}$</p>
                                                    <div>
                                                        <div
                                                            className={styles.minus}
                                                            onClick={() =>
                                                                changeQuantity(item, Math.max(1, quantity - 1))
                                                            }
                                                        >-
                                                        </div>
                                                        <p className={styles.quantity}>{quantity}</p>
                                                        <div
                                                            className={styles.plus}
                                                            onClick={() =>
                                                                changeQuantity(item, Math.max(1, quantity + 1))
                                                            }
                                                        >+
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className={styles.total}>{price * quantity}$</div>

                                            <div
                                                className={styles.close}
                                                onClick={() => removeItem(item.id)}
                                            >X
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </section>
    );
}