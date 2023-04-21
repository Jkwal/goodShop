import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Image, message} from "antd";

import {useAppDispatch} from "../hooks";

import {addItemToCart, getIsAuth, getSingleProduct, loadSingleProduct} from "../store";
import styles from 'styles/ProductPage.module.css'

import {Menu} from "../components/Menu/Menu";


export function ProductPage() {

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
    const navigate = useNavigate();

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
        <>
            <Menu/>

            <section className={styles.categoryPage}>
                {contextHolder}
                <div className={styles.header}>
                    <Button ghost onClick={() => navigate(-1)}>Back</Button>

                    <h2 className={styles.heading}>{category?.name}</h2>
                </div>

                <div className={styles.content}>

                    <div className={styles.info}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>

                        <div className={styles.wrapper}>

                            {
                                isAuth ? <Button className={styles.button} onClick={addToCart}>
                                        Add to cart
                                    </Button>

                                    : <Button disabled className={styles.button} onClick={addToCart}>
                                        Add to cart
                                    </Button>
                            }

                            <p className={styles.price}>{price}$</p>
                        </div>
                    </div>
                    <div className={styles.containerImage}>
                        {
                            images?.length
                                ? images.map((img) => (
                                    <Image key={img} className={styles.image} src={`${img}`} alt={title}/>))
                                : null
                        }
                    </div>

                </div>

            </section>
        </>
    )
}