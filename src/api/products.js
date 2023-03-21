import { BASE_API } from "../config/constants";


export class Products {
  
  async getProducts(){
    try {
      const url = `${BASE_API}/api/products/`;      

      const response = await fetch(url);    
      const result = await response.json();    

      if (response.status !==200 ) throw result;
     
      return result;
    } catch (error) {
      throw error;
    }
  }


  async getProductsByCategory(idCategory){
    try {    
      const productsFilter = `category=${idCategory}`;
  
      const url = `${BASE_API}/api/product_category/?${productsFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }


  async getProductBySlug(slug){
    try {    
      const productFilter = `slug=${slug}`;
  
      const url = `${BASE_API}/api/products/?${productFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getProductByName(name){
    try {    
      const productFilter = `name=${name}`;
  
      const url = `${BASE_API}/api/products/?${productFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }
}


