import { Advertisement, JoinLayout, LoginForm } from "@/components";
import Link from "next/link";

import styles from "./sign-in.module.scss";
import { BasicLayout } from "@/layouts";

export default function singInPage() {
  return (
    <>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>

      <div className={styles.singIn}>
        <h5>Iniciar seccion</h5>

        <LoginForm />

        <div className={styles.action}>
          <Link href="/">Volver al Catálogo</Link>
        </div>
      </div>
    </>
  );
}
