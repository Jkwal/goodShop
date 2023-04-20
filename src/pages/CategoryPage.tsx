import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";

import {Button} from "antd";
import {Space} from "antd/lib";

import {useAppDispatch} from "../hooks";
import {getListProductsCategory, loadProductsByCategory} from "../store";

import styles from 'styles/CategoryPage.module.css';

import {ProductCard} from "../components/ProductCard";
import {Menu} from "../components/Menu";



export function CategoryPage() {

    const {id} = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const products = useSelector(getListProductsCategory)

    useEffect(() => {
        id && dispatch(loadProductsByCategory(id));
    }, [dispatch, id])


    return (
        <>
            <Menu/>
            <section className={styles.categoryPage}>

                <div className={styles.header}>
                    <Button ghost onClick={() => navigate(-1)}>Back</Button>

                    <h2 className={styles.title}>{products[0]?.category?.name}</h2>
                </div>

                <Space size={[20, 20]} wrap>
                    {
                        products.map(({id, title, price, images}) => (
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