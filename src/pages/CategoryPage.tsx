import {Menu} from "components/Menu/Menu";
import {ListCategoryProducts} from "components/ListCategoryProducts";

export function CategoryPage() {
    return (
        <>
            <Menu/>
            <ListCategoryProducts bestsellers={false} withButtonBack={true}/>
        </>

    );
}