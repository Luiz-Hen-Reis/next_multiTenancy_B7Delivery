import styles from "./styles.module.css";
import BackIcon from "./backIcon.svg";
import Link from "next/link";

type Props = {
  backHref: string;
  color: string;
  title?: string;
  subTitle?: string;
};

const Header = ({ backHref, color, title, subTitle }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link href={backHref}>
          <BackIcon color={color} />
        </Link>
      </div>
      <div className={styles.center}>
        {title && <div className={styles.title}>{title}</div>}
        {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};

export default Header;
