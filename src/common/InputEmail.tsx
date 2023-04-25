import React, {FC} from "react";

import {Input} from "antd";

interface InputEmailProps {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const InputEmail: FC<InputEmailProps> = ({value,onChange}) => {
    return (
        <Input
            type="email"
            name="email"
            size="large"
            value={value}
            placeholder="Enter your email"
            onChange={onChange}
            autoComplete="off"
            required
        />
    )
}