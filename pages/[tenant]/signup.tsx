import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import { useAppContext } from "../../contexts/app";
import { useApi } from "../../libs/useApi";
import styles from "../../styles/SignUp.module.css";
import { Tenant } from "../../types/Tenant";

const SignUp = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const handleSubmit = () => {};

  const handleSignUp = () => {};

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastro | {data.tenant.name}</title>
      </Head>

      <Header backHref={`/${data.tenant.slug}`} color={data.tenant.mainColor} />

      <div className={styles.header}>{data.tenant.name}</div>

      <div className={styles.subTitle} style={{ borderColor: data.tenant.mainColor }}>
        Preencha os campos para criar o seu cadastro.
      </div>

      <div className={styles.line}></div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.mainColor}
            placeHolder={"Digite seu nome"}
            value={name}
            onChange={setName}
          />
        </div>
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
            label="Cadastrar"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>

      <div className={styles.forgetArea}>Já possui cadastro? <Link style={{ color: data.tenant.mainColor }} href={`/${data.tenant.slug}/login`}>Fazer Login</Link></div>


    </div>
  );
};

export default SignUp;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi(tenantSlug as string);

  const tenant = await api.getTenant();

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
