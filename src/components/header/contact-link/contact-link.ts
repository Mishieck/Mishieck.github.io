import { $create } from "odom";
import markup from "./contact-link.xml";
import styles from "./contact-link.scss";

type Props = {
  name: string;
  link: string;
  icon: string;
};

export const contactLink = async (props: Props) => {
  props.icon = `/src/assets/images/contacts/${props.icon}.svg`;

  return $create({
    id: "mishieck-github-io-contact-link",
    props,
    markup,
    styles: styles.toString()
  });
};
