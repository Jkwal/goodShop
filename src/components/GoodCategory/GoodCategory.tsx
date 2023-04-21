import React, {useEffect} from "react";

import styles from 'components/GoodCategory/GoodCategory.module.css';

import {randomNumber} from "../../utils";
import {useAppDispatch} from "../../hooks";

import {loadProductsByCategory} from "../../store";
import {ListCategoryProducts} from "../ListCategoryProducts";


export const GoodCategory = () => {


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadProductsByCategory(String(randomNumber)));
    }, [dispatch])


    return (
        <section className={styles.goodCategory}>

            <h2 className={styles.heading}>Bestsellers from </h2>
            <ListCategoryProducts bestsellers={true} withButtonBack={false}/>

        </section>
    )
}