import React from "react";
import { CardBody, CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";

import styles from "./ListCategories.module.scss";
import Link from "next/link";

export function ListCategories(props) {
  const { categories } = props;

  const goToCategory = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.list} >
      {map(categories, (category) => (
        <Link
          key={category.id}
          href={`/products/${category.slug}`}
          className={styles.list__category}         
         
        >
          <CardImg alt="Card image cap" src={category.image} />

          <div className={styles.category}
          >
            <CardTitle className={styles.title}>
              <h1 >{category.name}</h1>
              <h6 >ver más</h6>
            </CardTitle>
          </div>
        </Link>
      ))}
    </div>
  );
}
