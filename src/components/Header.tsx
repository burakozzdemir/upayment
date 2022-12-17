import "../index.css";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import upayments_logo from "../assets/images/upayments_logo.png";

const Header = (): JSX.Element => {
  return (
    <>
      <nav className="bg-gray-900">
        <div className="mx-auto max-w-7xl px- sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0">
                <Link to="products">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={upayments_logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="sm:ml-6 sm:block ">
                <div className="flex space-x-2">
                  <Link
                    to="products"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1.5 rounded-md text-base font-medium no-underline"
                  >
                    Products
                  </Link>

                  <Link
                    to="favorites"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1.5 rounded-md text-base font-medium no-underline"
                  >
                    Favorites
                  </Link>

                  <Link
                    to="newproduct"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1.5 rounded-md text-base font-medium no-underline"
                  >
                    New Product
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div className="flex space-x-2">
                  <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
