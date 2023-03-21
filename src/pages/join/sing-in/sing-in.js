import { JoinLayout, LoginForm } from "@/components";
import Link from "next/link";

import styles from "./sign-in.module.scss";

export default function singInPage() {
  return (
    <JoinLayout>
      <div className={styles.singIn}>
        <h5>Iniciar seccion</h5>

        <LoginForm />

        <div className={styles.action}>
            <Link href="/">
                Ir a Catalogo
            </Link>
        </div>
      </div>
    </JoinLayout>
  );
}
