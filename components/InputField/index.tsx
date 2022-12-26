import styles from "./styles.module.css";
import EyeOn from "./eyeOn.svg";
import EyeOff from "./eyeOff.svg";
import { useState } from "react";

type Props = {
  color: string;
  placeHolder: string;
  value: string;
  onChange: (newValue: string) => void;
  password?: boolean;
};

const InputField = ({
  color,
  placeHolder,
  value,
  onChange,
  password,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={styles.container}
      style={{
        borderColor: focused ? color : "#F9F9FD",
        backgroundColor: focused ? "#FFF" : "#F9F9FB",
      }}
    >
      <input
        className={styles.input}
        type={password ? (showPassword ? "text" : "password") : "text"}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {password && (
        <div
          className={styles.showPassword}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword && <EyeOn color="#BBB" />}
          {!showPassword && <EyeOff color="#BBB" />}
        </div>
      )}
    </div>
  );
};

export default InputField;
