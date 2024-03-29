import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className = "pl">
            <div className="pl-texts">
                <h1 className="pl-title">.....Create & Inspire..... Nghiem Pham</h1>
                <p className="pl-desc">
                    This is a creative portfolio that my work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
