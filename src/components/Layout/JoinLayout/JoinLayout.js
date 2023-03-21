import { useEffect, useState } from "react";
import styles from "./JoinLayout.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { CardBody, CardImg, CardTitle } from "reactstrap";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Link from "next/link";

export function JoinLayout(props) {
  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push("/");
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topBar}>
    
          <Link href="/">
            <CardImg src="/image/logo.png" alt="SURTIPAPELRIA" />{" "}
          </Link>
          <Link href="/">
            <AiOutlineClose size={30} />
          </Link>
        </div>

        <div className={styles.children}>{children}</div>
      </div>
    </>
  );
}
