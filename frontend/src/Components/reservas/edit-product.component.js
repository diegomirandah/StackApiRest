// Import Modules
import React, { useState, useEffect } from "react";
import ProductDataService from "../Services/product.service";
import ProductForm from "./ProductForm";

const EditProduct = (props) => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    stock: '',
    categoryId: ''
  });
    
  //onSubmit handler
  const onSubmit = (ProductObject) => {
    ProductDataService
      .update(props.match.params.id, ProductObject )
      .then((res) => {
        if (res.status === 200) {
          alert("Product successfully updated");
          props.history.push("/product-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize product form
  useEffect(() => {
    ProductDataService.get(props.match.params.id)
      .then((res) => {
        const { name, description, stock, categoryId } = res.data;
        setFormValues({ name, description, stock, categoryId});
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return product form
  return (
    <ProductForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Product
    </ProductForm>
  );
};
  
// Export EditProduct Component
export default EditProduct;