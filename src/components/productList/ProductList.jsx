import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Building and raising</h1>
        <p className="pl-desc">
          These are some of my project works where I applied all those magnificiary stuffs fascinated me!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title={item.title}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
