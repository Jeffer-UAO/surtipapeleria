import { size } from "lodash";
import React, { useState } from "react";
import { BasicLayout } from "@/layouts";
import { Advertisement, Menu, FormCategory, FormProduct } from "@/components";
import { Footer } from "@/components";

import styles from "./adminCategory.module.scss";

function AdminCategoryPage() {
  const [form, setForm] = useState(true);

  return (
    <div>
      <BasicLayout></BasicLayout>
      <Menu setForm={setForm} />

      {form ? (
        <div className={styles.adminCategory}>
          <FormCategory />
        </div>
      ) : (
        <div className={styles.adminCategory}>
          <FormProduct />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AdminCategoryPage;
