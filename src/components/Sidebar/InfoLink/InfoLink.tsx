import ApImage from "@/components/ApImage/ApImage";
import Link from "next/link";
import { FC } from "react";
import ApTooltip from "@/components/ApTooltip/ApTooltip";
import styles from "./InfoLink.module.scss";

const infoLink = {
  linkedin: "https://www.linkedin.com/in/tqdong308/",
  facebook: "https://www.facebook.com/profile.php?id=100007198128303",
  github: "https://github.com/DoriTran",
  gmail: "tranquocdong308@gmail.com",
};

interface InfoLinkProps {
  linkto: "linkedin" | "facebook" | "github" | "gmail";
}

const InfoLink: FC<InfoLinkProps> = ({ linkto }) => {
  if (linkto === "gmail")
    return (
      <ApTooltip tooltip={infoLink.gmail} divWrapper>
        <ApImage
          src="/contact icon/gmail.png"
          alt="Contact gmail"
          className={styles.contactIcon}
          onClick={() => navigator.clipboard.writeText(infoLink.gmail)}
        />
      </ApTooltip>
    );

  return (
    <Link href={infoLink[linkto]} rel="noopener noreferrer" target="_blank">
      <ApImage src={`/contact icon/${linkto}.png`} alt="Contact linkedin" className={styles.contactIcon} />
    </Link>
  );
};

export default InfoLink;
