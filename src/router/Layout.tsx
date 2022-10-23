import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import NewProduct from "../pages/NewProduct";
import Favorites from "../pages/Favorites";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="productsdetails" element={<ProductsDetails />} />
        <Route path="newproduct" element={<NewProduct />} />
      </Routes>
    </>
  );
};

export default Layout;
