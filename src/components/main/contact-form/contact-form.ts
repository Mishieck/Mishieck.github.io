import { $create } from "odom";
import markup from "./contact-form.xml";
import styles from "./contact-form.scss";

export const contactForm = async () => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};