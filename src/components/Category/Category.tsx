import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import {Space} from "antd/lib";
import styles from './Category.module.css';

import {ButtonBack} from "common";
import {useAppDispatch} from "hooks";
import {loadProductsByCategory} from "store";
import {ProductCard} from "components/ProductCard";
import {getMenuData} from "store/categories/selectors";



interface Category {
    withButtonBack: boolean;
    bestsellers: boolean
}


export const Category: React.FC<Category> = ({bestsellers, withButtonBack}) => {

    const {id} = useParams();

    const dispatch = useAppDispatch();

    const {products} = useSelector(getMenuData)

    useEffect(() => {
        id && dispatch(loadProductsByCategory(id));
    }, [dispatch, id])


    return (
        <>
            <section className={styles.listCategoryProducts}>

                <div className={styles.header}>

                    {withButtonBack && <ButtonBack/>}

                    <h2 className={styles.title}>{products[0]?.category?.name}</h2>
                </div>

                <Space className={styles.wrapper} size={[20, 20]} wrap>
                    {
                        bestsellers
                            ? products.slice(5, 15).map(({id, title, price, images}) => (
                                <div key={id}>
                                    <NavLink to={`/products/${id}`}>

                                        <ProductCard id={id} title={title} price={price} images={images}/>

                                    </NavLink>
                                </div>
                            ))
                            : products.map(({id, title, price, images}) => (
                                <div key={id}>
                                    <NavLink to={`/products/${id}`}>

                                        <ProductCard id={id} title={title} price={price} images={images}/>

                                    </NavLink>
                                </div>
                            ))
                    }

                </Space>

            </section>
        </>
    );
}