import {Button, Result} from 'antd';
import {ROUTES} from "../config";
import React from "react";
import {Link} from "react-router-dom";

export const NotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle="Категория не найдена, вернуться назад"
        extra={
            <Button type="primary">
                <Link to={ROUTES.HOME}>Back to Home</Link>
            </Button>
        }
    />
);

