import { $create } from "odom";
import markup from "./boundary.xml";
import styles from "./boundary.scss";

export const boundary = async ({ link, name, icon }) => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
