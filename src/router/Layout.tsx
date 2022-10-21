import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import NewProduct from "../pages/NewProduct";
import DetailPage from "../pages/DetailPage";
import Favorites from "../pages/Favorites";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="productsdetails" element={<Products />} />
        <Route path="detailpage" element={<DetailPage />} />
        <Route path="newproduct" element={<NewProduct />} />
      </Routes>
    </>
  );
};

export default Layout;
