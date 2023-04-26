import {useSelector} from "react-redux";

import {message} from "antd";
import styles from "./Basket.module.css";

import {sumPrice} from "utils";
import {useAppDispatch} from "hooks";
import {clearCart, getCart} from "store";
import {BasketList} from "../BasketList";
import {ButtonBack, ButtonPay} from "common";

export const Basket = () => {

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

    const cart = useSelector(getCart);
    const clearBasket = () => {
        dispatch(clearCart())
    }

    return (

        <section className={styles.basket}>

            {contextHolder}

            <div className={styles.header}>

                <ButtonBack/>

                <h2 className={styles.heading}>Cart</h2>

            </div>

            {
                !cart.length
                    ? <div className={styles.empty}>Here is empty</div>
                    : <div className={styles.content}>
                        <div className={styles.info}>

                            <div className={styles.total}>
                                <div>
                                    <strong>Total price:</strong>
                                    {
                                        sumPrice(cart.map(
                                            ({quantity, price}) => quantity * price))
                                    }
                                    $
                                </div>

                                <ButtonPay onClick={success}/>
                            </div>

                            <BasketList cart={cart}/>
                        </div>

                    </div>

            }
        </section>
    )
}