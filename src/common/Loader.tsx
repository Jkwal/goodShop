import {FC} from "react";

import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;


interface LoaderProps {
    className?: string;
}


export const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <Spin indicator={antIcon} className={className}/>
    );
};