import { $create } from "odom";
import markup from "./footer.xml";
import styles from "./footer.scss";

export const footer = async ({ link, name, icon }) => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
