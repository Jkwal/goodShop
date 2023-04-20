import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {Space} from "antd/lib";

import {ProductCard} from "../ProductCard";
import styles from 'components/GoodCategory/GoodCategory.module.css';

import {randomNumber} from "../../utils";
import {useAppDispatch} from "../../hooks";

import {getListProductsCategory, loadProductsByCategory} from "../../store";


export const GoodCategory = () => {

    const dispatch = useAppDispatch();

    const productsByCategory = useSelector(getListProductsCategory);

    useEffect(() => {
        dispatch(loadProductsByCategory(String(randomNumber)));
    }, [dispatch])


    return (
        <section className={styles.goodCategory}>

            <div className={styles.info}>
                <h2 className={styles.heading}>Bestsellers from </h2>
                <NavLink to={`/categories/${productsByCategory[0]?.category?.id}`}>
                    <p className={styles.subHeading}>
                        {productsByCategory[0]?.category?.name}
                    </p>
                </NavLink>

            </div>

            <Space className={styles.container} size={[8, 16]} wrap>
                {
                    productsByCategory.map(({id, price, title, images}) => (
                        <div key={id}>

                            <NavLink to={`/products/${id}`}>

                                <ProductCard id={id} title={title} price={price} images={images}/>

                            </NavLink>

                        </div>
                    )).slice(0, 12)
                }
            </Space>
        </section>
    )
}