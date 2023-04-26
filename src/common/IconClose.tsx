import {FC} from "react";

import {CloseOutlined} from "@ant-design/icons";


interface IconCloseProps {
    id: number,
    onClick: (id:number) => void;
}

export const IconClose: FC<IconCloseProps> = ({id,onClick}) => {
    return (
        <CloseOutlined onClick={() => onClick(id)}/>
    )
}