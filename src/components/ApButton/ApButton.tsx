"use client";

import { Button, IconButton } from "@mui/material";
import { FC, useRef } from "react";
import ApIcon from "../ApIcon/ApIcon";
import buttonTheme from "./theme";
import ApImage from "../ApImage/ApImage";
import styles from "./ApButton.module.scss";

// 35px - 50px - 65px
const btnHeight = { small: "2.188rem", medium: "3.125rem", large: "4.063rem" };

interface ApButtonProps {
  icon?: any;
  startIcon?: any;
  endIcon?: any;
  iconProps?: { [key: string]: any };
  color?: "dark" | "primary" | "secondary" | "white" | "pink" | "plum";
  height?: "small" | "medium";
  selected?: boolean;
  sx?: object;
  children?: React.ReactNode;
  [key: string]: any;
}

const ApButton: FC<ApButtonProps> = ({
  icon,
  startIcon,
  endIcon,
  iconProps,
  color = "white",
  height = "small",
  selected,
  sx,
  children,
  ...restButtonProps
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const btnProps = {
    ...(startIcon && {
      startIcon: <ApIcon icon={startIcon} size={iconProps?.size || "1.25rem"} {...iconProps} />,
    }),
    ...(endIcon && {
      endIcon: <ApIcon icon={endIcon} size={iconProps?.size || "1.25rem"} {...iconProps} />,
    }),
    sx: {
      backgroundColor: buttonTheme[color].color,
      color: buttonTheme[color].contrast,
      height: selected ? `calc(${btnHeight[height]} + 0.938rem)` : btnHeight[height],
      fontSize: "1.125rem",
      textTransform: "none",
      padding: "0 0.938rem",
      ...(icon && { width: btnHeight[height] }),
      ...(selected && { paddingTop: "0.938rem" }),
      "&:hover": {
        backgroundColor: buttonTheme[color].hover,
      },
      ...sx,
    },
    ...restButtonProps,
  };

  if (!icon) {
    if (selected)
      return (
        <div className={styles.selectedBtn}>
          <ApImage
            src="/schedule/selected.png"
            alt="selected img icon"
            className={styles.selectedImg}
            onClick={() => btnRef?.current?.click()}
          />
          <Button ref={btnRef} {...btnProps}>
            {children}
          </Button>
        </div>
      );
    return <Button {...btnProps}>{children}</Button>;
  }
  return (
    <IconButton {...btnProps}>
      <ApIcon icon={icon} size={iconProps?.size || "1.25rem"} {...iconProps} />
    </IconButton>
  );
};

export default ApButton;
