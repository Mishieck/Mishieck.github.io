import { $create } from "odom";
import markup from "./pyramid.xml";
import styles from "./pyramid.scss";

export const pyramid = async () => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
