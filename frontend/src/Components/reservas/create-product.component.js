// Import Modules
import React, { useState, useEffect } from "react";
import ProductDataService from "../Services/product.service";
import ProductForm from "./ProductForm";

const CreateProduct = () => {
  const [formValues, setFormValues] = useState({ name: '', description: '', stock: '', categoryId: ''})
  const onSubmit = productObject => {
      ProductDataService.create(productObject)
      .then(res => {
        if (res.status === 200)
          alert('Product successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return product form
  return(
    <ProductForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create product
    </ProductForm>
  )
}
    
  // Export CreateProduct Component
  export default CreateProduct