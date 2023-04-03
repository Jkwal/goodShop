import React from "react";
import {Button, message} from "antd";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";

import styles from 'styles/CartPage.module.css'


import {sum} from "../utils";
import {useAppDispatch} from "../hooks";
import {CartItem} from "../types";
import {addItemToCart, getCart, removeItemFromCart,clearCart} from "../store";

export function CartPage() {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Order is processed',
            style: {
                marginTop: '20vh',
            },
            duration: 1,
        });
        clearBasket();
    };

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const cart = useSelector(getCart);



    const changeQuantity = (item: CartItem, quantity: number) => {
        dispatch(addItemToCart({...item, quantity}));
    };

    const removeItem = (id: number) => {
        dispatch(removeItemFromCart(id));
    };

    const clearBasket = () =>{
        dispatch(clearCart())
    }


    return (

        <section className={styles.cartPage}>
            {contextHolder}
            <div className={styles.header}>
                <Button ghost onClick={() => navigate(-1)}>Back</Button>
                <h2 className={styles.heading}>Cart</h2>

            </div>

            {
                !cart.length
                    ? <div className={styles.empty}>Here is empty</div>
                    : <div className={styles.content}>


                        <div className={styles.info}>
                            <div className={styles.total}>
                                <div>
                                    <strong>Total price:</strong> {sum(cart.map(({quantity, price}) => quantity * price))}$
                                </div>
                                <Button
                                    type="primary"
                                    size="small"
                                    onClick={success}
                                >Pay</Button>
                            </div>

                            {
                                cart.map((item) => {
                                    const {title, images, price, id, quantity} = item;

                                    return (
                                        <>
                                            <div key={id} className={styles.item}>

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

                                                <CloseOutlined onClick={() => removeItem(item.id)}/>

                                            </div>

                                        </>

                                    )
                                })
                            }

                        </div>

                    </div>

            }

        </section>
    );
}