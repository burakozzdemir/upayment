import * as Yup from "yup";
import { useFormik } from "formik";
import { NewProduct } from "../types/Product";
import { createProduct, getCategories } from "../services/ProductService";
import { useAppDispatch, useAppSelector } from "../reduxToolkit/store";
import { Category } from "../types/Category";
import { useEffect, useState } from "react";

const EMPTY_PRODUCT = {
  name: "",
  avatar: "",
  description: "",
  price: 0,
  category: "",
  developerEmail: ""
}


const AddNewProduct = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const categories: Array<Category> = useAppSelector((state: any) => state.categories.categories);
  const [added, setAdded] = useState(false);
  useEffect(() => {
    dispatch(getCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const formik = useFormik({
    initialValues: {...EMPTY_PRODUCT},
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),

        price: Yup.string()
        .required("Required"),

        category: Yup.string()
        .required("Required"),

        description: Yup.string()
        .required("Required"),

        avatar: Yup.string()
        .required("Required"),

        developerEmail: Yup.string()
        .required("Required"),
    }),
    onSubmit: (values: NewProduct, action) => {
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 4000);
      var res = createProduct(values);
      if (res) {
        res.then(x => {
          action.resetForm();
        });
      }
    },
  });

  return (
    <>
      { added && <div className="saved">Saved ✓</div> }
      <div className="new_product">
        <h2>Add New Product</h2>
        <form onSubmit={formik.handleSubmit}>
        <div className="input_wrapper">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>

          {formik.touched.name && formik.errors.name ? (
            <p className="new_product_required">{formik.errors.name}</p>
          ) : null}

          <div className="input_wrapper">
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Price $"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price === 0 ? "" : formik.values.price}
            />
          </div>

          {formik.touched.price && formik.errors.price ? (
            <p className="new_product_required_one">{formik.errors.price}</p>
          ) : null}

            <select className="form-select form-select-lg mb-3 category" aria-label=".form-select-lg example"  
              id="category"
              name="category"
              placeholder="Category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}>
                <option value="">Category</option>
              {categories.length && categories.map((category) => 
                <option key={category._id} value={category.name}>{category.name}</option>)}
            </select>

          {formik.touched.category && formik.errors.category ? (
            <p className="new_product_required_one">{formik.errors.category}</p>
          ) : null}

          <div className="input_wrapper">
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </div>

          {formik.touched.description && formik.errors.description ? (
            <p className="new_product_required_one">{formik.errors.description}</p>
          ) : null}

          <div className="input_wrapper">
            <input
              id="avatar"
              name="avatar"
              type="text"
              placeholder="Avatar"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.avatar}
            />
          </div>

          {formik.touched.avatar && formik.errors.avatar ? (
            <p className="new_product_required_one">{formik.errors.avatar}</p>
          ) : null}

          <div className="input_wrapper">
            <input
              id="developerEmail"
              name="developerEmail"
              type="email"
              placeholder="someone@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.developerEmail}
            />
          </div>

          {formik.touched.developerEmail && formik.errors.developerEmail ? (
            <p className="new_product_required_one">{formik.errors.developerEmail}</p>
          ) : null}
          <button type="submit">
            Save
          </button>
 
           
        </form>
      </div>
    </>
  );
};

export default AddNewProduct;
