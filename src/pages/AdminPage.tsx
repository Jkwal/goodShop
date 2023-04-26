import {Col, Row} from "antd";

import {AdminTable} from "components/AdminTable";


export const AdminPage = () => {

    return (
            <Row>
                <Col span={12} offset={6}>
                    <AdminTable/>
                </Col>
            </Row>
    )
}