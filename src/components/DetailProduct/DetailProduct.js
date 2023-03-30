import React, { useEffect, useState } from "react";
import { map } from "lodash";

import { CardBody, CardImg, CardTitle } from "reactstrap";
import styles from "./DetailProduct.module.scss";

export function DetailProduct(props) {
  const [productData, setProductData] = useState("");
  const { product, relate } = props;

  useEffect(() => {
    setProductData(product);
  }, []);

  const changeDetail = (data) => {
    setProductData(data);
  };

  if (product) {
    return (
      <div className={styles.detailProduct}>
        <div className={styles.product}>
          <CardImg alt="Card image cap" src={productData.images} />

          <CardTitle className={styles.title}>
            <h5>
              {productData.name} {productData.name_extend}
            </h5>
            <h6>$ {productData.price1}</h6>
          </CardTitle>
        </div>

        <div className={styles.relate}>
          <p>PRODUCTOS RELACIONADOS</p>

          <div className={styles.list}>
            {map(relate, (product, index) => (
              <div
                key={index}
                className={styles.list__product}
                onClick={() => changeDetail(product)}
              >
                <CardImg alt="Card image cap" src={product.images} />

                <div className={styles.product}>
                  <CardTitle className={styles.title}>
                    <h5>
                      {product.name} {product.name_extend}
                    </h5>
                    <h6>$ {product.price1}</h6>
                  </CardTitle>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }else{
    return (

      <h5> La pagina no existe</h5>
    )
  }
}
