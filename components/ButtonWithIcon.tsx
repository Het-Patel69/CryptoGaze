import React from "react";

import styles from "./ButtonWithIcon.module.css";
import Image from "next/image";

const ButtonWithIcon = ({
  children,
  classes,
  iconLink,
  offset,
}: {
  children: React.ReactNode;
  classes: string;
  iconLink: string;
  offset?: number;
}) => {
  return (
    <button className={`${classes} ${styles.btn}`}>
      {children}{" "}
      <Image
        width={20}
        height={20}
        src={iconLink}
        alt="..."
        style={{ translate: `0 ${offset ? `${offset}px` : 0}` }}
      />
    </button>
  );
};

export default ButtonWithIcon;
