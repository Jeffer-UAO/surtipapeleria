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
    console.log("error error error error");
    console.log(idCategory);
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

  async getProductByName(flag){
    try {    
      const productFilter = `flag=${flag}`;
  
      const url = `${BASE_API}/api/products/?${productFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }
  

  async getProductByOfertAndExclusive(){
    try {      
      const url = `${BASE_API}/api/productsOE/`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }
}


