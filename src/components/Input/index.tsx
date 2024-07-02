import { ComponentProps } from "react";
import "./styles.css";

interface InputProps extends ComponentProps<"input"> {}

export const Input = ({ ...rest }: InputProps) => {
  return <input type="text" {...rest} />;
};
