import React, {FC} from "react";

import {Input} from "antd";


interface InputNameProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const InputName: FC<InputNameProps> = ({value,onChange}) => {
    return (
        <Input type="name"
               name="name"
               size="large"
               value={value}
               placeholder="Enter your name"
               onChange={onChange}
               autoComplete="off"
               required
        />
    )
}