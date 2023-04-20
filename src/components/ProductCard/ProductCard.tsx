import React from "react";
import {Card} from 'antd';

import styles from './ProductCard.module.css';
import {Product} from "../../types";

export function ProductCard({title, images, price}: Product) {

    return (
        <Card
            className={styles.card}
            hoverable
        >
            <img className={styles.image} src={images![0]} alt={title}/>

            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>{`${price}$`}</p>
            </div>

        </Card>
    );
}
