import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../reduxToolkit/store";
import { getCategories } from "../services/ProductService";
import { Category } from "../types/Category";

export type CategoryFilterType = {
  handleChange: (e: string) => any
}

const CategoryFilter: React.FC<CategoryFilterType> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const categories: Array<Category> = useAppSelector((state: any) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <select className="form-select w-25 bg-warning" aria-label="Default select example" onChange={(e) => props.handleChange(e.target.value)}>
        <option value="">Categories</option>
        {categories.length && categories.map((category) => 
          <option key={category._id} value={category.name}>{category.name}</option>)}
    </select>
  );
};

export default CategoryFilter;
