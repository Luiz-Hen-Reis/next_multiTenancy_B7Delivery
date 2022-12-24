import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../../contexts/AppContext";
import { Product } from "../../types/Product";
import styles from "./styles.module.css";

type Props = {
  data: Product;
};

const ProductItem = ({ data }: Props) => {
  const { tenant } = useAppContext();

  return (
    <Link className={styles.link} href={`/${tenant?.slug}/product/${data.id}`}>
      <div className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: tenant?.secondaryColor }}
        ></div>
        <div className={styles.info}>
          <div className={styles.imgContainer}>
            <Image width={500} height={500} src={data.image} alt="" />
          </div>
          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: tenant?.mainColor }}>
            R$ {data.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
