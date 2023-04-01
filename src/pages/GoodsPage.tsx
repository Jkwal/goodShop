import { loadProducts} from "../store";
import {useAppDispatch} from "../hooks";
import React, {useEffect} from "react";
import {AdminTable} from "../components/AdminTable";
import {Col, Row} from "antd";

export const GoodsPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadProducts());

    }, [dispatch])

    return (
        <Row>
            <Col span={12} offset={6}>
                <AdminTable/>
            </Col>
        </Row>

    )
}