import React, {useEffect} from "react";

import {Col, Row} from "antd";
import styles from 'styles/GoodsPage.module.css';

import { loadProducts} from "store";
import {useAppDispatch} from "hooks";
import {AdminTable} from "components/AdminTable";


export const GoodsPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadProducts());

    }, [dispatch])

    return (
        <section className={styles.goodsPage}>
            <Row>
                <Col span={12} offset={6}>
                    <AdminTable/>
                </Col>
            </Row>
        </section>
    )
}