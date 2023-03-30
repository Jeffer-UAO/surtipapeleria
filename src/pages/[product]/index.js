export { default } from "./product";

import React, { useEffect } from "react";
import { Products } from "@/api/products";

export async function getServerSideProps(context) {
  const { params } = context;
  const { product } = params;

  const productCtrl = new Products();
  const responseProduct = await productCtrl.getProductBySlug(product);

  const responseProductRelate = await productCtrl.getProductByName(
    responseProduct[0]?.name
  );

 
    return {
      props: {
        product: responseProduct,
        relate: responseProductRelate,
      },
    };
 
}
