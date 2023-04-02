import React, {useEffect} from "react";
import {Col, Row} from "antd";

import {useAppDispatch} from "../hooks";
import { loadProducts} from "../store";

import {AdminTable} from "../components/AdminTable";

import styles from 'styles/GoodsPage.module.css'

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