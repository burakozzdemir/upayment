import React from "react";
import { Product } from "../types/Product";
import { useAppDispatch } from "../reduxToolkit/store";
import { deleteFavorite } from "../reduxToolkit/features/favoritesSlice";

const FavoriteProduct: React.FC<{item: Product, index: number}> = (props): JSX.Element => {
	const dispatch = useAppDispatch();

	const removeFavorite = (): void => {
		dispatch(deleteFavorite(props.index));
	}

  return (
    <div className="card mb-4 favorite_wrapper">
			<div className="row m-3">
				<div className="col-9 favorite_card_content">
					<img className="card-img-top favorite_img" src={props.item.avatar} alt={props.item.name} />
					<div className="card-body ml-1">
						<h5>{props.item.name} </h5>
						<p>{props.item.category} </p>
						<span>{props.item.price} $</span>
				</div>
				</div>
				<div className="col-3 favorite_delete">
					<button type="button" onClick={() => removeFavorite()}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
    </div>
  );
};

export default FavoriteProduct;
