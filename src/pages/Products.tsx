import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../reduxToolkit/store";
import { getProducts } from "../services/ProductService";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "../types/Product";

const Products = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<Array<Product>>([]);
  const productState = useAppSelector((state: any) => state.product.products);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect((): void => {
    dispatch(getProducts());
     // eslint-disable-next-line
  }, []);

  useEffect((): void => {
    setProducts(productState);
  }, [productState]);

  const filterProduct = (value: string): void => {
    setSelectedCategory(value);
    if (value) {
      setProducts(productState.filter((product: Product) => product.category === value))
    } else {
      setProducts(productState)
    }
  }

  return (
    <>
      { products.length  ?  <> 
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="my-3">Products</h2>
              <CategoryFilter handleChange={(value: string) => filterProduct(value)}/>
              <hr />
            </div>
          </div>
        </div>
        <div className="container bg-muted">
          {selectedCategory && 
            <div className="row justify-content-around">
              <div className="col-12 text-center">
              <h4 className="my-3 text-danger">{selectedCategory} Products List</h4>
            </div>            
          </div>
          }
          <div className="row justify-content-around">
            {products.length > 0 && products.map((item: Product, index: number) => <ProductCard key={index} {...item}/>)}
          </div>
        </div> 
      </> : <div className="loading">Loading...</div>
      }
    </>
  );
};

export default Products;
