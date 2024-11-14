import React from "react";
import CircularProgress from "../../Assets/SVGs/CircularProgress/CircularProgress";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "null" | "invalid";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  className,
  icon,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${className} py-2 px-4 font-body text-sm rounded  font-medium flex items-center justify-center gap-1 ${
        type === "secondary"
          ? "bg-white text-blue-100"
          : type === "tertiary"
          ? "bg-blue-200 text-white"
          : type === "null"
          ? "bg-none  text-blue-100"
          : "bg-blue-100 text-white"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <CircularProgress width="1.5rem" height="1.5rem" color="inherit" />
      ) : (
        children
      )}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
