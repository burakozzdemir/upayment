import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../reduxToolkit/store";
import Cart from "../components/Card";
import { getProduct } from "../services/ProductService";
const Products = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="my-3">Products</h2>
            <hr />
          </div>
        </div>
      </div>
      <div className="container bg-muted">
        <div className="row justify-content-around">
          {products && products.map((_product, index) => <Cart key={index} />)}
        </div>
      </div>
    </>
  );
};

export default Products;
