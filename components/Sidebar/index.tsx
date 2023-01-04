import { useRouter } from "next/router";
import { useAuthContext } from "../../contexts/auth/hook";
import { Tenant } from "../../types/Tenant";
import Button from "../Button";
import SidebarItem from "../SidebarItem";
import styles from "./styles.module.css";

type Props = {
  tenant: Tenant;
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ tenant, open, onClose }: Props) => {
  const { user, setToken } = useAuthContext();
  const router = useRouter();

  return (
    <div className={styles.container} style={{ width: open ? "100vw" : "0" }}>
      <div className={styles.area}>
        <div className={styles.header}>
          <div
            className={styles.loginArea}
            style={{ borderBottomColor: tenant.mainColor }}
          >
            {user && (
              <div className={styles.userInfo}>
                <strong>{"user.name"}</strong>
                Último pedido há X semanas
              </div>
            )}
            {!user && (
              <Button
                color={tenant.mainColor}
                label="Fazer Login"
                onClick={() => router.push(`/${tenant.slug}/login`)}
                fill
              />
            )}
          </div>
          <div
            onClick={onClose}
            className={styles.closeBtn}
            style={{ color: tenant.mainColor }}
          >
            x
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.menu}>
          <SidebarItem
            color={"#6A7D8B"}
            icon="menu"
            label="Cardápio"
            onClick={onClose}
          />
          <SidebarItem
            color={"#6A7D8B"}
            icon="cart"
            label="Sacola"
            onClick={() => router.push(`/${tenant.slug}/cart`)}
          />
          <SidebarItem
            color={"#6A7D8B"}
            icon="fav"
            label="Favoritos"
            onClick={() => {}}
            disabled
          />
          <SidebarItem
            color={"#6A7D8B"}
            icon="order"
            label="Meus Pedidos"
            onClick={() =>router.push(`/${tenant.slug}/orders`)}
          />
          <SidebarItem
            color={"#6A7D8B"}
            icon="config"
            label="Configurações"
            onClick={() => {}}
            disabled
          />
        </div>
        <div className={styles.menuBottom}>
          {user && (
            <SidebarItem
              color={"#6A7D8B"}
              icon="logout"
              label="Sair"
              onClick={() => {
                setToken('');
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
