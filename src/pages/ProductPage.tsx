import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Image} from "antd";

import {useAppDispatch} from "../hooks";

import {addItemToCart, getCart, getSingleProduct, loadSingleProduct} from "../store";
import styles from 'styles/ProductPage.module.css'

import {Menu} from "../components/Menu";


export function ProductPage() {

    const {id} = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const product = useSelector(getSingleProduct);
    const {title, images, price, description, category} = product;

    const addToCart = () => {
        dispatch(addItemToCart(product));
    };

    useEffect(() => {
        id && dispatch(loadSingleProduct(id));
    }, [dispatch, id])


    return (
        <>
            <Menu/>
            <section className={styles.categoryPage}>
                <div className={styles.header}>
                    <Button ghost onClick={() => navigate(-1)}>Back</Button>

                    <h2 className={styles.heading}>{category?.name}</h2>
                </div>

                <div className={styles.content}>

                    <div className={styles.info}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>

                        <div className={styles.wrapper}>

                            <Button className={styles.button} onClick={addToCart}>
                                Add to cart
                            </Button>


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