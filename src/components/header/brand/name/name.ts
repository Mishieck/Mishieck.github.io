import { $create } from "odom";
import markup from "./name.xml";
import styles from "./name.scss";

export const name = async () => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
