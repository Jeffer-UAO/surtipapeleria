import React, { useEffect, useState } from "react";
import { Categories } from "@/api/category";
import { Menu, ListCategories, Advertisement, Footer } from "@/components";
import { BasicLayout } from "../../layouts";
import { useAuth } from "@/hooks/useAuth";

const categoriesCtrl = new Categories();

export default function HomePage() {
  const [categories, setCategories] = useState(null);
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

  return (
    <>
      <BasicLayout>

        <Advertisement />
      </BasicLayout>

      <ListCategories categories={categories} />
      {user ? <h5></h5> : <h5></h5>}

      <Footer />
    </>
  );
}
