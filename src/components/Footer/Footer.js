import React from "react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h6>SOBRE NOSOTROS</h6>
        <div className={styles.link}>
          <p>Nosotros</p>
          <p>Contacto</p>
          <p>Productos</p>
        </div>
      </div>
      <div>
        <h6>CATEGORÍAS</h6>
        <div className={styles.link}>
          <p>Nosotros</p>
        </div>
      </div>

      <div>
        <div className={styles.link}>
          <h6>Redes</h6>
        </div>
      </div>
      <div>
        <p className={styles.copyright}>
          SURTIPAPELERIA LA 15 Copyright © 2023. Todos los derechos reservados |
          Desarrollado por: Jeffer Quiñones
        </p>
      </div>
    </div>
  );
}
