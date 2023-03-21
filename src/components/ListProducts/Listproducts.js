import React from "react";
import { CardBody, CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";

import styles from "./ListProduts.module.scss";
import Link from "next/link";

export function Listproducts(props) {
  const { products, title } = props;


  return (
    <>
      <div className={styles.category}>
        <h2>{title}</h2>
      </div>

      <div className={styles.list}>
        {map(products, (product, index) => (
          <Link
            key={index}
            href={`/${product.productData.slug}`}
            className={styles.list__product}
          >
            <CardImg alt="Card image cap" src={product.productData.images} />

            <div className={styles.product}>
              <CardTitle className={styles.title}>
                <h5>
                  {product.productData.name} {product.productData.name_extend}
                </h5>
                <h6>$ {product.productData.price1}</h6>
              </CardTitle>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
