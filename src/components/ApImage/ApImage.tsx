import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";
import styles from "./ApImage.module.scss";

interface ApImageProps {
  src: string;
  alt?: string;
  fullScreen?: boolean;
  objectFit?: "fill" | "contain" | "cover" | "scale-down" | "none";
  className?: string;
  [key: string]: any;
}

const ApImage: FC<ApImageProps> = ({
  src,
  alt = "Alice can't load this image",
  fullScreen,
  objectFit,
  className,
  ...restProps
}) => {
  return (
    <div className={clsx({ [styles.fullScreen]: fullScreen }, styles.relative, className)}>
      <Image
        src={src}
        fill
        alt={alt}
        {...restProps}
        style={{ objectFit: objectFit || "cover", objectPosition: "top", ...restProps.style }}
      />
    </div>
  );
};

export default ApImage;
