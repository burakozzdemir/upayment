import React from "react";
import { NavLink } from "react-router-dom";
import { Product } from "../types/Product";

const ProductCard = (item: Product): JSX.Element => {
  return (
    <div className="card my-5" style={{ width: "18rem" }}>
      <img className="card-img-top" src={item.avatar} alt={item.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{item.name} </h5>
        <div className="lead py-2 ">{item.price} $</div>
      </div>
      <NavLink to={`/product/${item._id}`} className="btn btn-primary mb-2">
        Product Detail
      </NavLink>
    </div>
  );
};

export default ProductCard;
