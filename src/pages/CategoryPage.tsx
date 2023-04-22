import {Menu} from "components/Menu/Menu";
import {Category} from "components/Category";

export function CategoryPage() {
    return (
        <>
            <Menu/>
            <Category bestsellers={false} withButtonBack={true}/>
        </>

    );
}