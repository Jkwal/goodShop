import {Badge} from "antd";
import {ShoppingTwoTone} from '@ant-design/icons';

export function Cart() {
    return (
        <ul>
                <Badge count={6} >
                    <ShoppingTwoTone twoToneColor="#AAA" style={{'fontSize':'3rem'}}/>
                </Badge>
        </ul>
    );
}