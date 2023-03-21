import React from "react";
import styles from "./BasicLayout.module.scss";
import { TopBar } from "../../components"


export function BasicLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    realtive = false,
  } = props;


  return (
    <>
      <TopBar isOpenSearch= {isOpenSearch}/>
      {children}
    </>
  );
}
