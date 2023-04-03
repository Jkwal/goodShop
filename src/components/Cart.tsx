import {Badge} from "antd";
import {ShoppingTwoTone} from '@ant-design/icons';
import {useSelector} from "react-redux";
import {getCart} from "../store";

export function Cart() {

    const cart = useSelector(getCart)

    return (
        <ul>
            <Badge count={cart.length}>
                <ShoppingTwoTone twoToneColor="#AAA" style={{'fontSize': '3rem'}}/>
            </Badge>
        </ul>
    );
}