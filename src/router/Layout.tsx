import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import NewProduct from "../pages/AddNewProduct";
import Favorites from "../pages/Favorites";
import ProductsDetails from "../pages/ProductsDetails";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="/product/:product_id" element={<ProductsDetails />} />
        <Route path="newproduct" element={<NewProduct />} />
      </Routes>
    </>
  );
};

export default Layout;
