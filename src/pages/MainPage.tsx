import {Menu} from "components/Menu";
import {Slider} from "common/Slider";
import {Advertising} from "utils/mock";
import {Bestseller} from "components/Bestseller";

export function MainPage() {
    return (
        <>
            <Menu/>
            <Slider slides={Advertising} navigation={true}/>
            <Bestseller/>
        </>
    )
}