import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import { useAppContext } from "../../contexts/AppContext";
import { useApi } from "../../libs/useApi";
import styles from "../../styles/Login.module.css";
import { Tenant } from "../../types/Tenant";

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const router = useRouter();

  const handleSubmit = () => {};

  const handleSignUp = () => {
    router.push(`/${data.tenant.slug}/signup`)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | {data.tenant.name}</title>
      </Head>

      <Header backHref={`/${data.tenant.slug}`} color={data.tenant.mainColor} />

      <div className={styles.header}>{data.tenant.name}</div>

      <div className={styles.subTitle} style={{ borderColor: data.tenant.mainColor }}>
        Use suas credenciais para realizar o login.
      </div>

      <div className={styles.line}></div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.mainColor}
            placeHolder={"Digite seu e-mail"}
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.mainColor}
            placeHolder={"Digite sua senha"}
            value={password}
            onChange={setPassword}
            password
          />
        </div>
        <div className={styles.inputArea}>
          <Button
            color={data.tenant.mainColor}
            label="Entrar"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>

      <div className={styles.forgetArea} style={{ borderColor: data.tenant.mainColor  }}>Esqueceu sua senha? <Link style={{ color: data.tenant.mainColor }} href={`/${data.tenant.slug}/forget`}>Clique aqui</Link></div>

      <div className={styles.line}></div>

      <div className={styles.signUpArea}>
        <div className={styles.inputArea}>
          <Button
            color={data.tenant.mainColor}
            label="Quero me cadastrar"
            onClick={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi();

  const tenant = await api.getTenant(tenantSlug as string);

  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tenant,
    },
  };
};
