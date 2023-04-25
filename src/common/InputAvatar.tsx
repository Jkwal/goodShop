import React, {FC} from "react";

import {Input} from "antd";


interface InputAvatarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const InputAvatar: FC<InputAvatarProps> = ({value, onChange}) => {
    return (
        <Input style={{marginTop: '10px'}}
               type="avatar"
               name="avatar"
               size="large"
               value={value}
               placeholder="Your avatar"
               onChange={onChange}
               autoComplete="off"
               required
        />
    )
}