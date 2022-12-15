import { useEffect } from "react";
import FavoriteProduct from "../components/FavoriteProduct";
import { setInitialFavorites } from "../reduxToolkit/features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../reduxToolkit/store";
import { Product } from "../types/Product";

const Favorites = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state: any) => state.favorites.favorites);

  useEffect((): void => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      dispatch(setInitialFavorites(JSON.parse(favorites)));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container bg-muted">
      <div className="row justify-content-around">
      <div className="col-12 text-center">           
       <h2 className="my-3">Favorite List</h2>
      </div>
      </div>
      <div className="row justify-content-around">
        {favorites.length > 0 && favorites.map((item: Product, index: number) => <FavoriteProduct key={index} item={item} index={index}/>)}
      </div>
    </div>
  )
}

export default Favorites;