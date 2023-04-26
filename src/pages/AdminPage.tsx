import {Col, Row} from "antd";
import styles from 'styles/GoodsPage.module.css';

import {AdminTable} from "components/AdminTable";


export const AdminPage = () => {


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