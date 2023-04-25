import React, {FC} from "react";

import {Input} from "antd";

interface InputPasswordProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const InputPassword: FC<InputPasswordProps> = ({value, onChange}) => {
    return (
        <Input.Password style = {{marginTop: '10px'}}
                        type="password"
                        name="password"
                        size="large"
                        value={value}
                        placeholder="Enter your password"
                        onChange={onChange}
                        autoComplete="off"
                        required
        />
    )
}