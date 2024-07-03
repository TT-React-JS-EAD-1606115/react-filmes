import { ComponentProps, ReactNode } from "react";
import "./styles.css";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  outline?: boolean;
}

export const Button = ({ children, outline, ...rest }: ButtonProps) => {
  return (
    <button className={outline ? "btn-outline" : ""} {...rest}>
      {children}
    </button>
  );
};
