import React from "react";
import styles from "./TopBar.module.scss";
import { CardBody, CardImg, CardTitle } from "reactstrap";
import { MdImageSearch } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import Link from "next/link";

export function TopBar(props) {
  const { isOpenSearch } = props;

  return (
    <>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg
            src="/image/logo-surtipapeleriala15-1.png"
            alt="SURTIPAPELRIA"
          />{" "}
        </Link>

        <div className={styles.icon}>
          <MdImageSearch size={25} />
          <Link href="/join/sing-in">
            <FaUserCog size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}
