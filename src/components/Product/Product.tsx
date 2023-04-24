import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import styles from './Product.module.css';
import {message} from "antd";

import {useAppDispatch} from "hooks";
import {ButtonAddToBasket, ButtonBack, Slider} from "common";
import {addItemToCart, getIsAuth, getSingleProduct, loadSingleProduct} from "store";


export const Product = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Item in cart',
            style: {
                marginTop: '26vh',
            },
            duration: 1,
        });
    };

    const {id} = useParams();

    const dispatch = useAppDispatch();
    const product = useSelector(getSingleProduct);
    const isAuth = useSelector(getIsAuth)
    const {title, images, price, description, category} = product;

    const addToCart = () => {
        dispatch(addItemToCart(product));

        isAuth && success();
    };

    useEffect(() => {
        id && dispatch(loadSingleProduct(id));
    }, [dispatch, id])


    return (

        <section className={styles.product}>

            {contextHolder}

            <div className={styles.header}>
                <ButtonBack/>

                <h2 className={styles.heading}>{category?.name}</h2>
            </div>

            <div className={styles.content}>


                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.wrapper}>

                        {
                            isAuth
                                ? <ButtonAddToBasket className={styles.button} onClick={addToCart}/>
                                : <ButtonAddToBasket className={styles.button} onClick={addToCart} disabled={true}/>
                        }

                        <p className={styles.price}>{price}$</p>
                    </div>
                </div>

                <div className={styles.containerImage}>
                    {
                        images?.length
                            ? <Slider slides={images} navigation={false}/>
                            : null
                    }
                </div>
            </div>

        </section>
    )
}