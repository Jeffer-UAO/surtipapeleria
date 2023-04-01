import React, { useEffect, useState } from "react";
import { Categories } from "@/api/category";
import { Advertisement, Footer, AboutUs } from "@/components";
import { BasicLayout } from "../../layouts";
// import { useAuth } from "@/hooks/useAuth";

// const categoriesCtrl = new Categories();

export default function AboutHome() {
  const [about, setAbout] = useState("");
  //   const { user, logout } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        // const response = await categoriesCtrl.getAll();
        // setAbout(response);
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

      <AboutUs />
      
      <Footer />
    </>
  );
}
