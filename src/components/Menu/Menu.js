import styles from "./Menu.module.scss";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";

export function Menu(props) {
  const { setForm } = props;
  const { accessToken, logout, user } = useAuth();

  const goToAdmin = () => {
    if (!user) {
      router.push("/join/sing-in");
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.headerPage}>
          <div className={styles.item} onClick={() => setForm(true)}>
            <AiOutlineClose size={28} />
          </div>
          <div className={styles.item} onClick={() => setForm(false)}>
            <AiOutlineClose size={28} />
          </div>
          <div className={styles.item}>
            <Link href="">
              <AiOutlineClose size={28} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
