import { $create } from "odom";
import markup from "./contact-link.xml";
import styles from "./contact-link.scss";

export const contactLink = async (props = {}) => {
  const options = { props, markup, styles: styles };
  return $create(options);
};
