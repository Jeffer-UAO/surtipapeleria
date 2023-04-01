import React, { useEffect, useState } from "react";
import { Categories } from "@/api/category";
import { Products } from "@/api/products";
import {
  Menu,
  ListCategories,
  Advertisement,
  Footer,
  Promotion,
  Exclusive,
  WhatsApp,
} from "@/components";
import { BasicLayout } from "../../layouts";
import { useAuth } from "@/hooks/useAuth";

import styles from "./Home.module.scss"

const categoriesCtrl = new Categories();
const productsCtrl = new Products();

export default function HomePage() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  const { user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await categoriesCtrl.getAll();

        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await productsCtrl.getProductByOfertAndExclusive();
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (products !== null) {
    return (
      <>
        <BasicLayout>
          <Advertisement />
        </BasicLayout>

        <ListCategories categories={categories} />
        <hr />
        <Promotion products={products} />
        <hr />
        <Exclusive products={products} />

        <div className={styles.btnWhatsapp}>
        <WhatsApp phoneNumber="+573103900666" message="Hola, me gustaría obtener más información sobre sus productos."/>

        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>

      <ListCategories categories={categories} />

      <Footer />
    </>
  );
}
