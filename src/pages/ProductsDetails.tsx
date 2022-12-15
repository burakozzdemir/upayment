import { NavLink } from "react-router-dom";
import { getProduct } from "../services/ProductService";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../reduxToolkit/store";
import { addFavorite } from "../reduxToolkit/features/favoritesSlice";
import { Product } from "../types/Product";

const EMPTY_PRODUCT = {
  _id: "",
  name: "",
  avatar: "",
  description: "",
  price: 0,
  category: "",
  developerEmail: ""
}

const ProductsDetails = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product>(EMPTY_PRODUCT);

  useEffect(() => {
    let id: string = window.location.pathname.replace("/product", "");
    var res = getProduct(id);
    if (res) {
      res.then(x => {
        setProduct(x.data.product)
      });
    }
  }, []);

  const addNewFavorite = (): void => {
    dispatch(addFavorite(product));
  }

  const renderProductDetails = () => {
    return (
      <div className="product my-5 py-3 mx-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto item">
            <NavLink to="/product">
              <img
                src={product.avatar}
                alt={product.name}
                style={{ height: 350 }}
              />
            </NavLink>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-6 fw-normal">{product.name}</h1>
            <hr />
            <h2 className="my-2">{product.price} $</h2>
            <p className="lead text-muted"> {product.description} </p>
            <div className="quantity-wrapper">
            </div>
            <button className="btn btn-primary" onClick={() => addNewFavorite()}>
              Add to Favorite
            </button>
          </div>
        </div>
      </div >
    );
  };

  return (
    <>
      <div className="container-py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="my-3">Products</h2>
            <hr />
          </div>
        </div>
      </div>
      <div>{product ? renderProductDetails() : ""}</div>
    </>
  );
};
export default ProductsDetails;
