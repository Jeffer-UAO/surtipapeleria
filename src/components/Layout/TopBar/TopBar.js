import React, { useState, useEffect } from "react";
import styles from "./TopBar.module.scss";
import { CardBody, CardImg, CardTitle } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export function TopBar(props) {
  const { isOpenSearch } = props;
  const { accessToken, logout, user } = useAuth();

  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Aquí podrías hacer una petición a tu API o base de datos para obtener el número de teléfono y mensaje
  //   setPhone("573005309990");
  //   setMessage("¡Hola! Estoy interesado en comprar un producto");
  // }, []);

  // const handleWhatsAppClick = () => {
  //   const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  //   window.open(url);
  // };

  const goToAdmin = () => {
    if (!user) {
      router.push("/join/sing-in");
    }
  };

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
          <AiOutlineSearch size={25} />

          <Link href="/join/sing-in">
            <FaUserCog size={25} />
          </Link>

          {/* <div>
        <button onClick={handleWhatsAppClick}>Chatea con nosotros por WhatsApp</button>
      </div> */}
        </div>
      </div>
    </>
  );
}
