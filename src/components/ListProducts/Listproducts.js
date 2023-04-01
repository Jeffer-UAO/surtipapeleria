import React from "react";
import { CardBody, CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "../WhatsApp";

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
          <div className={styles.list__product}>
            <div>
              <Link key={index} href={`/${product.productData.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.productData.images}
                />

                <div className={styles.product}>
                  <CardTitle className={styles.title}>
                    <h5>
                      {product.productData.name}{" "}
                      {product.productData.name_extend}
                    </h5>

                    {product.productData.price1 !== null && (
                      <h6>$ {product.productData.price1}</h6>
                    )}
                  </CardTitle>
                </div>
              </Link>
            </div>

            <div>
              <WhatsApp
                phoneNumber="+573103900666"
                message={
                  BASE_NAME +
                  product.productData.images +
                  " " +
                  product.productData.name +
                  " " +
                  product.productData.name_extend +
                  " " +
                  "Referencia: " +
                  product.productData.codigo
                }
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
